import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { SubmitService } from './services/submit.service';
import { ConfirmFormDrivenComponent } from './components/confirm-driven-form/confirm-driven-form.component';
import { ConfirmReactiveFormComponent } from './components/confirm-reactive-form/confirm-reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmReactiveFormComponent,
    ConfirmFormDrivenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [SubmitService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
