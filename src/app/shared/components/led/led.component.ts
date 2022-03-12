import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { LEDGeneratorService } from '../../sharedClass/ledClass';

@Component({
  selector: 'map-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LEDComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() number:string;

  splitedNumber: string[] = [];
  decimalPointIndex:number = 0;

  constructor(private ledGeneratorService: LEDGeneratorService) { }

  ngOnChanges() {
      
    const _splitedNumber: string[] = Array.from(this.number);

    this.decimalPointIndex = _splitedNumber.findIndex((item: string) => item === ".");

    this.splitedNumber = _splitedNumber.filter((item: string, index: number) => index !== this.decimalPointIndex);

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.splitedNumber.map((number, index) => {

      const divElement: HTMLDivElement = document.querySelector(`.h${index + 1}`) as HTMLDivElement;
      divElement.setAttribute("on", "true");
      const expression = "ditigal-member";

      this.ledGeneratorService.trunOnNumber(divElement, expression, +number);

      if ( index === this.decimalPointIndex - 1 ) {

        const decimalPointHtmlDivElement: HTMLDivElement = divElement.querySelector("div.fourth-column")! as HTMLDivElement;
        const afterElement: HTMLDivElement = decimalPointHtmlDivElement.querySelector("div.ditigal-decimal-point-after")! as HTMLDivElement;
        afterElement.classList.add("decimal-point-active");

      }

    });
    
  }

}
