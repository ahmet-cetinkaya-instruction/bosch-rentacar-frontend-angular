import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MultipleDirective } from './directives/app-multiple.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HighlightDirective, MultipleDirective],
  imports: [CommonModule],
  exports: [HighlightDirective, MultipleDirective],
})
export class SharedModule {}
