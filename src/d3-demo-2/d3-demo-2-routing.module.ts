import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { D3Demo2Component } from './d3-demo-2.component';

const d3Demo2Routes: Routes = [
  { path: '', component: D3Demo2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(d3Demo2Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class D3Demo2RoutingModule {}