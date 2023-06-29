import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTwoComponent } from './components/form-two.component';
 
const routes: Routes = [
  { path: '', component: FormTwoComponent },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class formTwoRoutingModule { }