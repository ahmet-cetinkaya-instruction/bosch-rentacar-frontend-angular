import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//# Structural Directive
//: NgIf, NgFor, NgSwitch
@Directive({
  selector: '[appMultiple]',
})
export class MultipleDirective {
  constructor(
    private template: TemplateRef<any>,
    // TemplateRef: Directive uyguladığımız elementin içerisindeki child elementleri temsil eder.
    // <div appMultiple>
    //   ...
    // </div>
    private viewContainerRef: ViewContainerRef //ViewContainerRef: Structural Directive'lerin kullanıldığı yerdeki elementin referansını alır. Ek olarak davraşını değiştiren metotları mevcut.
  ) {}

  @Input('appMultiple') set appMultiple(count: number) {
    for (let i = 0; i < count; i++) {
      this.viewContainerRef.createEmbeddedView(this.template);
    }
  }

  // Then, Else
  // @Input('appMultipleElse') appMultipleElse!: number;
}
