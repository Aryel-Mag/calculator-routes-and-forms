import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTwoComponent } from './components/form-two.component';

// import routing module with routing info
import { formTwoRoutingModule } from './form-two-routing.module';

//MATERIAL DESIGN UI
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    FormTwoComponent
  ],
  imports: [
    CommonModule,
    formTwoRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class FormTwoModule { }
