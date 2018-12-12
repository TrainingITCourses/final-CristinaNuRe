import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchDetailContainerComponent } from './launch-detail-container/launch-detail-container.component';
import { LaunchDetailPresenterComponent } from './launch-detail-presenter/launch-detail-presenter.component';
import { StoreModule } from '@ngrx/store';
import * as fromLaunch from './store/launch.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './store/launch.effects';

@NgModule({
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    StoreModule.forFeature('launch', fromLaunch.reducer),
    EffectsModule.forFeature([LaunchEffects])
  ],
  declarations: [LaunchDetailContainerComponent, LaunchDetailPresenterComponent]
})
export class LaunchesModule { }
