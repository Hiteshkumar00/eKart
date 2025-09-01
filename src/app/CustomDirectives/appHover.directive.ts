import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective{
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ){ }

  @HostBinding('style.backgroundColor') // we can bind any property with this property
  backgroundColor: string = '#2778aeff';

  @HostListener('mouseenter')
  onHover(){
    this.backgroundColor = '#2752aeff';
  }



  @HostListener('mouseout')
  onHoverEnd(){
    this.backgroundColor = '#2778aeff';
  }

}
