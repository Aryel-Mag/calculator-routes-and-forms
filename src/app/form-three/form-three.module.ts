import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormThreeComponent } from './components/form-three.component';

import { formThreeRoutingModule } from './form-two-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FormThreeComponent
  ],
  imports: [
    CommonModule,
    formThreeRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class FormThreeModule { }
