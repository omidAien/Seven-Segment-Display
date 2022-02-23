import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'map-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LEDComponent implements OnChanges, OnInit {

  @Input() number:string;

  splitedNumber: string[] = [];

  constructor() { }

  ngOnChanges() {
      
    this.splitedNumber = Array.from(this.number);

  }

  ngOnInit(): void {
  }

}
