import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ConfirmReactiveFormComponent } from '../components/confirm-reactive-form/confirm-reactive-form.component';
import {SharedModule} from './shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmReactiveFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
