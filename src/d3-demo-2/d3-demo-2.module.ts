import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3Demo2RoutingModule } from './d3-demo-2-routing.module';
import { D3Demo2Component } from './d3-demo-2.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    D3Demo2RoutingModule
  ],
  declarations: [
    D3Demo2Component,
    BarChartComponent
  ],
  providers: [
  
  ],
  exports: [
    D3Demo2Component
  ]
})
export class D3Demo2Module {}