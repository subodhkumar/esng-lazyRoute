import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyMconeComponent } from './lazy-mcone/lazy-mcone.component';
import { LazyMctwoComponent } from './lazy-mctwo/lazy-mctwo.component';

const routes: Routes = [
  {
    path:'comp1',
    component: LazyMconeComponent
  },
  {
    path:'comp2',
    component: LazyMctwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMoneRoutingModule { }
