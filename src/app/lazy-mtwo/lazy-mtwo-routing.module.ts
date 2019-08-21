import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyMcthreeComponent } from './lazy-mcthree/lazy-mcthree.component';
import { LazyMcfourComponent } from './lazy-mcfour/lazy-mcfour.component';

const routes: Routes = [
  {
    path:'comp1',
    component: LazyMcthreeComponent
  },
  {
    path: 'comp2',
    component: LazyMcfourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMtwoRoutingModule { }
