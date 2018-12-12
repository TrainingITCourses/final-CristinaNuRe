import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'status',
    loadChildren: './status/status.module#StatusModule'
  },
  {
    path: 'launches',
    loadChildren: './launches/launches.module#LaunchesModule'
  },
  { path: '',
    redirectTo: '/status',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
