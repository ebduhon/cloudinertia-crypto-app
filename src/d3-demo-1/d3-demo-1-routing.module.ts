import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { D3Demo1Component } from './d3-demo-1.component';

const d3Demo1Routes: Routes = [
  { path: '', component: D3Demo1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(d3Demo1Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class D3Demo1RoutingModule {}