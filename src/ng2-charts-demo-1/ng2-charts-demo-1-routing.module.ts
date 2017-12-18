import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ng2ChartsDemo1Component } from './ng2-charts-demo-1.component';

const ng2ChartsDemo1Routes: Routes = [
  { path: '', component: Ng2ChartsDemo1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ng2ChartsDemo1Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Ng2ChartsDemo1RoutingModule {}