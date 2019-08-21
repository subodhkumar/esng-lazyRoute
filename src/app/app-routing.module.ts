import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'mod1',
    loadChildren:()=>import('./lazy-mone/lazy-mone.module').then((mod)=>mod.LazyMoneModule)
  },
  {
    path:'mod2',
    loadChildren:()=>import('./lazy-mtwo/lazy-mtwo.module').then((mod)=>mod.LazyMtwoModule)
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
