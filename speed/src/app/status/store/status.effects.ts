import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StatusActionTypes, StatusLoaded, LaunchesLoaded } from './status.actions';
import { ApiService } from 'src/app/store/services/api.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class StatusEffects {

  @Effect()
  public loadStatus$ = this.actions$.ofType(StatusActionTypes.LoadStatus).pipe(
    mergeMap(() => this.api.getLaunchStatus$().pipe(
        map(allLaunchStatus => new StatusLoaded(allLaunchStatus))
      ))
  );

  @Effect()
  public loadLaunches$ = this.actions$.ofType(StatusActionTypes.LoadLaunches).pipe(
    mergeMap(() => this.api.getLaunches$().pipe(
        map(allLaunches => new LaunchesLoaded(allLaunches))
      ))
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
