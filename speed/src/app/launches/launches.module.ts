import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchDetailContainerComponent } from './launch-detail-container/launch-detail-container.component';
import { LaunchDetailPresenterComponent } from './launch-detail-presenter/launch-detail-presenter.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchesRoutingModule
  ],
  declarations: [LaunchDetailContainerComponent, LaunchDetailPresenterComponent]
})
export class LaunchesModule { }
