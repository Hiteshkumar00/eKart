import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableProductDirective implements OnInit {

  @Input() set disableProduct(disable: boolean){
    if(disable){
      this.renderer.setStyle(this.element.nativeElement, 'opacity', '0.6');
    }
  };

  constructor(
    private element: ElementRef,
    private renderer : Renderer2
  ) { }

  ngOnInit(): void{

  }
}
