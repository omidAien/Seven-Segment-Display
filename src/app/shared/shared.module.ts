import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LEDComponent } from './components/led/led.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSignClassDirective } from './components/LED/Directives/add-sign-class.directive';



@NgModule({
  declarations: [LEDComponent, AddSignClassDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LEDComponent
  ]
})
export class SharedModule { }
