import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxChartsDemo1Component } from './ngx-charts-demo-1.component';

const ngxChartsDemo1Routes: Routes = [
  { path: '', component: NgxChartsDemo1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ngxChartsDemo1Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NgxChartsDemo1RoutingModule {}