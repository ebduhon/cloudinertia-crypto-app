import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { PublicGuardService } from './public-guard.service';

const publicRoutes: Routes = [
  {
    path: '', 
    component: PublicComponent, canActivate: [ PublicGuardService ],
    children: [
      { path: '', canActivateChild: [ ],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', loadChildren: 'home/home.module#HomeModule', canLoad: [ PublicGuardService ], data: { title: 'Home'} },
        ] },
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule {}