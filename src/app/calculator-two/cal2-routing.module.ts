import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator2Component } from './components/calculator2/calculator2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes = [
  { path: '', component: Calculator2Component },
  { path: 'dashboard', component: DashboardComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cal2RoutingModule { }
