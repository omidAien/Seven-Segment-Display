import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sampleForm:FormGroup;

  constructor() {}

  ngOnInit(): void {

    this.sampleForm = new FormGroup({
      weight: new FormControl("98787.369")
    });
    
  }

  getFormControlName(formControlName:string) {

    return this.sampleForm.controls[formControlName];

  }

}
