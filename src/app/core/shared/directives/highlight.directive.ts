import {
  Directive,
  ElementRef,
  Host,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

//: Directive bir elementin özelliklerini veya davranışlarını değiştirmek için kullanılır.
//: Attribute Directive: Özelliklerini değiştirir.
//: Built-in attribute directives: NgClass, NgStyle, NgModel ...
// <div appHighlight></div>
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  //# Event Binding
  // document.querySelector('div[appHighlight]').addEventListener('mouseenter', () => {});
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.mouseEnterColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.appHighlight);
  }

  //# Parameters
  // @Input() element'sAtrributeName
  // <div appHighlight="yellow"></div>
  // @Input() appHighlight: 'yellow' | 'white' | 'red' = 'yellow';
  @Input() appHighlight: string = 'yellow';
  // <div appHighlight="yellow" mouseEnterColor="white"></div>
  @Input() mouseEnterColor: string = 'white';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    //: ElementRef: Directive'i uyguladığımız DOM Elementin referansını alır.
    //: elementRef.nativeElement: ilgili elementin referansını veriyor.
    //: JS tarafındaki document.querySelector('div.highlight'); ile aynı.
    this.highlight(this.appHighlight);
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
