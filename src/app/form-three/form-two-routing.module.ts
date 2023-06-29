import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormThreeComponent } from './components/form-three.component';
 
const routes: Routes = [
  { path: '', component: FormThreeComponent },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class formThreeRoutingModule { }