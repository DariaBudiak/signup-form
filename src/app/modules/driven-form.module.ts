import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrivenFormRoutingModule } from './driven-form-routing.module';
import { ConfirmFormDrivenComponent } from '../components/confirm-driven-form/confirm-driven-form.component';
import {SharedModule} from './shared.module';
@NgModule({
  declarations: [
    ConfirmFormDrivenComponent
  ],
  imports: [
    CommonModule,
    DrivenFormRoutingModule,
    SharedModule
  ]
})
export class DrivenFormModule { }
