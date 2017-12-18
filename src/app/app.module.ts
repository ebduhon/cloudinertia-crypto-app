import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './state/root';
import { CustomRouterStateSerializer } from './state/utils/custom-router-state-serializer';

import { NavigationFacade } from './state/navigation/navigation.facade';

import { CoreModule } from '../core/core.module';
//TODO: auth
//TODO: framwork-store
import { FrameworkLayoutModule } from '../framework-layout/framework-layout.module';

//TODO: secure
import { PublicModule } from '../public/public.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppGuardService } from './app-guard.service';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebase['ciBusiness'];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    CoreModule.forRoot(),
    FrameworkLayoutModule,
    PublicModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Title,
    AppGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
