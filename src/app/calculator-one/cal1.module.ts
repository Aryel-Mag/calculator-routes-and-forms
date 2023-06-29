import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import routing module with routing info
import { Cal1RoutingModule } from './cal1-routing.module';

import { Calculator1Component } from './components/calculator1/calculator1.component';


@NgModule({
  declarations: [
    Calculator1Component
  ],
  imports: [
    CommonModule,
    Cal1RoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class Cal1Module { }
