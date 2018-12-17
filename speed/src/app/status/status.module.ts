import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusContainerComponent } from './status-container/status-container.component';
import { StatusListPresenterComponent } from './status-list-presenter/status-list-presenter.component';
import { StatusDetailContainerComponent } from './status-detail-container/status-detail-container.component';
import { LaunchesCounterPresenterComponent } from './launches-counter-presenter/launches-counter-presenter.component';
import { LaunchesListPresenterComponent } from './launches-list-presenter/launches-list-presenter.component';
import { StoreModule } from '@ngrx/store';
import * as fromStatus from './store/status.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StatusEffects } from './store/status.effects';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    StoreModule.forFeature('status', fromStatus.reducer),
    EffectsModule.forFeature([StatusEffects])
  ],
  declarations: [
    StatusContainerComponent, 
    StatusListPresenterComponent, 
    StatusDetailContainerComponent, 
    LaunchesCounterPresenterComponent, 
    LaunchesListPresenterComponent]
})
export class StatusModule { }
