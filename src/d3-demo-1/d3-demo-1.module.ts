import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { D3Demo1RoutingModule } from './d3-demo-1-routing.module';
import { D3Demo1Component } from './d3-demo-1.component';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { D3Service, D3_DIRECTIVES } from './d3';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    D3Demo1RoutingModule
  ],
  declarations: [
    D3Demo1Component,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  providers: [
    D3Service
  ],
  exports: [
    D3Demo1Component
  ]
})
export class D3Demo1Module {}