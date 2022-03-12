import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LEDComponent } from './components/led/led.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSignClassDirective } from './components/LED/Directives/add-sign-class.directive';
import { LEDGenerator } from './sharedClass/led.class';



@NgModule({
  declarations: [LEDComponent, AddSignClassDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LEDComponent
  ],
  providers: [
    LEDGenerator
  ]
})
export class SharedModule { }
