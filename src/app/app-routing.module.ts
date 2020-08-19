import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfirmReactiveFormComponent } from './components/confirm-reactive-form/confirm-reactive-form.component';
import { ConfirmFormDrivenComponent } from './components/confirm-driven-form/confirm-driven-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'reactive', component: ConfirmReactiveFormComponent },
  {path: 'driven', component: ConfirmFormDrivenComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
