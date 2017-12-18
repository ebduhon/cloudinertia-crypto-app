import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgxChartsDemo1RoutingModule } from './ngx-charts-demo-1-routing.module';
import { NgxChartsDemo1Component } from './ngx-charts-demo-1.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    NgxChartsDemo1RoutingModule
  ],
  declarations: [
    NgxChartsDemo1Component
  ],
  exports: [
    NgxChartsDemo1Component
  ]
})
export class NgxChartsDemo1Module {}