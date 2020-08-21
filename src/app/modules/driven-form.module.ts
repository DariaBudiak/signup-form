import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrivenFormRoutingModule } from './driven-form-routing.module';
import { ConfirmFormDrivenComponent } from '../components/confirm-driven-form/confirm-driven-form.component';
import {SharedModule} from './shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ConfirmFormDrivenComponent
  ],
  imports: [
    CommonModule,
    DrivenFormRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class DrivenFormModule { }
