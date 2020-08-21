import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'reactive', loadChildren: () => import('./modules/reactive-form.module').then(m => m.ReactiveFormModule) },
  {path: 'driven', loadChildren: () => import('./modules/driven-form.module').then(m => m.DrivenFormModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
