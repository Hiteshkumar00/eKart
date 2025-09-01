import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: 'customNgClass'
})
export class CustomNgClassDirective {
  @Input('customNgClass') set customClasses(value: Object){

    let entries = Object.entries(value); // return this type of data => [ [key, value], [key, value], ... ]

    for(let entry of entries) {
      let [className, condition] = entry;
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }

  };

  constructor(
    private element: ElementRef,
    private renderer : Renderer2
  ){}
}
