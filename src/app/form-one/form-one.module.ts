import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormOneComponent } from './components/form-one/form-one.component';

//MATERIAL DESIGN UI
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 

// import routing module with routing info
import { formOneRoutingModule } from './form-one-routing.module';

@NgModule({
  declarations: [
    FormOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    formOneRoutingModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class FormOneModule { 
}
