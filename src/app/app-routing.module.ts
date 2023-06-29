import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cal1',
    loadChildren: () => import('./calculator-one/cal1.module').then(m => m.Cal1Module)
  },
  {
    path: 'cal2',
    loadChildren: () => import('./calculator-two/cal2.module').then(m => m.Cal2Module)
  },
  {
    path: 'form-1',
    loadChildren: () => import('./form-one/form-one.module').then(m => m.FormOneModule)
  },
  {
    path: 'form-2',
    loadChildren: () => import('./form-two/form-two.module').then(m => m.FormTwoModule)
  },
  {
    path: 'form-3',
    loadChildren: () => import('./form-three/form-three.module').then(m => m.FormThreeModule)
  },
  {
    path: 'hero-form',
    loadChildren: () => import('./hero-form/hero-form.module').then(m => m.HeroFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }