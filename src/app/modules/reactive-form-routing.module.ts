import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmReactiveFormComponent } from '../components/confirm-reactive-form/confirm-reactive-form.component';

const routes: Routes = [{ path: '', component: ConfirmReactiveFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
