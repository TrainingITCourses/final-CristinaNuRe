import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusContainerComponent } from './status-container/status-container.component';
import { StatusListPresenterComponent } from './status-list-presenter/status-list-presenter.component';
import { StatusDetailContainerComponent } from './status-detail-container/status-detail-container.component';
import { LaunchesCounterPresenterComponent } from './launches-counter-presenter/launches-counter-presenter.component';
import { LaunchesListPresenterComponent } from './launches-list-presenter/launches-list-presenter.component';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule
  ],
  declarations: [StatusContainerComponent, StatusListPresenterComponent, StatusDetailContainerComponent, LaunchesCounterPresenterComponent, LaunchesListPresenterComponent]
})
export class StatusModule { }
