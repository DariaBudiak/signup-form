import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmFormDrivenComponent } from '../components/confirm-driven-form/confirm-driven-form.component';

const routes: Routes = [{ path: '', component: ConfirmFormDrivenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivenFormRoutingModule { }
