import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AppGuardService } from './app-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'd3-demo-1', loadChildren: 'd3-demo-1/d3-demo-1.module#D3Demo1Module', canLoad: [ AppGuardService ], data: { title: 'd3-demo-1'} },
  { path: 'd3-demo-2', loadChildren: 'd3-demo-2/d3-demo-2.module#D3Demo2Module', canLoad: [ AppGuardService ], data: { title: 'd3-demo-2'} },
  { path: 'ngx-charts-demo-1', loadChildren: 'ngx-charts-demo-1/ngx-charts-demo-1.module#NgxChartsDemo1Module', canLoad: [ AppGuardService ], data: { title: 'ngx-charts-demo-1'} },
  { path: 'ng2-charts-demo-1', loadChildren: 'ng2-charts-demo-1/ng2-charts-demo-1.module#Ng2ChartsDemo1Module', canLoad: [ AppGuardService ], data: { title: 'ng2-charts-demo-1'} },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ 
    AppGuardService 
  ]
})
export class AppRoutingModule { }
