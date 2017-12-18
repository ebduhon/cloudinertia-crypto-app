import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FrameworkLayoutModule } from '../framework-layout/framework-layout.module';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublicGuardService } from './public-guard.service';

@NgModule({
  imports: [
    SharedModule,
    FrameworkLayoutModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent
  ],
  providers: [
    PublicGuardService
  ]
})
export class PublicModule {}