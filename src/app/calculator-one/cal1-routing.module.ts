import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator1Component } from './components/calculator1/calculator1.component';

const routes = [
  { path: '', component: Calculator1Component }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cal1RoutingModule { }
