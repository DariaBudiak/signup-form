import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LoadingFormComponent } from '../components/loading-form/loading-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NotFoundComponent,
    LoadingFormComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports:[
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    NotFoundComponent,
    LoadingFormComponent
  ]
})
export class SharedModule { }
