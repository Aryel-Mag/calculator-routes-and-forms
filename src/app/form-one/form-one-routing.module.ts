import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOneComponent } from './components/form-one/form-one.component';
 
const routes: Routes = [
  { path: '', component: FormOneComponent },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class formOneRoutingModule { }