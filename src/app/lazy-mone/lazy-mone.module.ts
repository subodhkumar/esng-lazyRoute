import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMoneRoutingModule } from './lazy-mone-routing.module';
import { LazyMconeComponent } from './lazy-mcone/lazy-mcone.component';
import { LazyMctwoComponent } from './lazy-mctwo/lazy-mctwo.component';

@NgModule({
  declarations: [LazyMconeComponent, LazyMctwoComponent],
  imports: [
    CommonModule,
    LazyMoneRoutingModule
  ]
})
export class LazyMoneModule { }
