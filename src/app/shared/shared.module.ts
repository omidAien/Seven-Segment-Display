import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LEDComponent } from './components/led/led.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSignClassDirective } from './components/led/attribute-directives/add-sign-class.directive';
import { LEDGeneratorService } from './sharedClass/ledClass';



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
    LEDGeneratorService
  ]
})
export class SharedModule { }
