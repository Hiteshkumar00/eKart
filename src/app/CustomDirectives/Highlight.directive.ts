import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {

  }

  @HostListener('mouseenter') // host element is that element where wwe using this directive
  OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'highlightDirective');
  }

  @HostListener('mouseout')
  OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'highlightDirective');
  }

}
