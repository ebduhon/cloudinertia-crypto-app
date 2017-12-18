import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { Ng2ChartsDemo1RoutingModule } from './ng2-charts-demo-1-routing.module';
import { Ng2ChartsDemo1Component } from './ng2-charts-demo-1.component';
import { BaseChartDirective } from './directives/base-chart.directive';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    Ng2ChartsDemo1RoutingModule
  ],
  declarations: [
    Ng2ChartsDemo1Component,
    BaseChartDirective
  ],
  exports: [
    Ng2ChartsDemo1Component,
    BaseChartDirective
  ]
})
export class Ng2ChartsDemo1Module {}