import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './components/hero-form.component';


import { HeroFormRoutingModule } from './form-two-routing.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    HeroFormRoutingModule,
    FormsModule
  ]
})
export class HeroFormModule { }
