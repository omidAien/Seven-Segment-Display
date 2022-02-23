import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mapAddSignClass]'
})
export class AddSignClassDirective {

  constructor(private render2: Renderer2, private elementRef: ElementRef<any>) { }

  @Input("mapAddSignClass") set addSign(index:number) {

    const cssClass:string = `h${index + 1}`;

    this.render2.addClass(this.elementRef.nativeElement, cssClass);

  }

}
