import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LEDGeneratorService } from '../../sharedClass/ledClass';

@Component({
  selector: 'map-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LEDComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() formControl:FormControl;

  splitedNumber: string[] = [];
  decimalPointIndex:number = 0;

  constructor(private ledGeneratorService: LEDGeneratorService) { }

  ngOnChanges() {

    this.handleEnteredNumber();

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.showNumber();
    
  }

  handleEnteredNumber() {

    const nuumber:string = this.formControl.value; 

    const _splitedNumber: string[] = Array.from(nuumber);

    this.decimalPointIndex = _splitedNumber.findIndex((item: string) => item === ".");

    this.splitedNumber = _splitedNumber.filter((item: string, index: number) => index !== this.decimalPointIndex);

  }

  selectFourthColumnHtmlDiv(divElement: HTMLDivElement) {

    const decimaPointContainer: string = "div.fourth-column";
    const decimalPointAfterContainer: string = "div.ditigal-decimal-point-after";

    return divElement.querySelector(decimaPointContainer).querySelector(decimalPointAfterContainer)! as HTMLDivElement;

  }

  showNumber() {


    const DECIMAL_POINT_ACTIVE_CSS_CLASS = "decimal-point-active";

    if ( this.splitedNumber.every((item: string) => !!item && item !== "." ) ) {

      this.splitedNumber.map((number, index) => {

        const divElement: HTMLDivElement = document.querySelector(`.h${index + 1}`) as HTMLDivElement;
        divElement.setAttribute("on", "true");
        const expression = "ditigal-member";
  
        this.ledGeneratorService.trunOnNumber(divElement, expression, +number);
  
        if ( index === this.decimalPointIndex - 1 ) {
  
          const decimalPointAfterElm: HTMLDivElement = this.selectFourthColumnHtmlDiv(divElement);
          decimalPointAfterElm.classList.add(DECIMAL_POINT_ACTIVE_CSS_CLASS);
  
        }
  
      });

    }

  }

}
