import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[setBackground]'
})
export class SetBackground implements OnInit{
  // private element: ElementRef;

  // @Input() backColor: string = '#f0f0f0';
  // @Input() textColor: string = '#666';

  @Input('setBackground') changeTextAndbackColor: {backColor: string, textColor: string}; // using same alias as directive selecter we can take any input from our element

  constructor(private element: ElementRef, private renderer: Renderer2){
    // this.element = element;
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = '#f0f0f0'; // It's not advisable.
    // this.element.nativeElement.style.color = '#666';

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndbackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndbackColor.textColor);

    // this.renderer.setAttribute(this.element.nativeElement, 'title', 'Set attribute dynamaclly');

  }
}
