import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMtwoRoutingModule } from './lazy-mtwo-routing.module';
import { LazyMcthreeComponent } from './lazy-mcthree/lazy-mcthree.component';
import { LazyMcfourComponent } from './lazy-mcfour/lazy-mcfour.component';

@NgModule({
  declarations: [LazyMcthreeComponent, LazyMcfourComponent],
  imports: [
    CommonModule,
    LazyMtwoRoutingModule
  ]
})
export class LazyMtwoModule { }
