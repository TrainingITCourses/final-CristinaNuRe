import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header/header-container/header-container.component';
import { HeaderPresenterComponent } from './header/header-presenter/header-presenter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StatusEffects } from './status/store/status.effects';
import { LaunchEffects } from './launches/store/launch.effects';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    HeaderPresenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),  
    EffectsModule.forRoot([StatusEffects, LaunchEffects]), 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
