import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusContainerComponent } from './status-container/status-container.component';
import { StatusDetailContainerComponent } from './status-detail-container/status-detail-container.component';

const routes: Routes = [
  {
    path:':id',
    component: StatusDetailContainerComponent
  },  
  {
    path:'',
    component: StatusContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
