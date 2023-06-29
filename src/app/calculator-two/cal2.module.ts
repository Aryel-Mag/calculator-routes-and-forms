import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import routing module with routing info
import { Cal2RoutingModule } from './cal2-routing.module';

import { Calculator2Component } from './components/calculator2/calculator2.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ResultComponent } from './components/result/result.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    Calculator2Component,
    ButtonsComponent,
    ResultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    Cal2RoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class Cal2Module { }
