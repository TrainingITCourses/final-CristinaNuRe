import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LaunchActionTypes, LaunchesLoaded, LaunchesNotLoaded } from './launch.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from 'src/app/store/services/api.service';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$.ofType(
    LaunchActionTypes.LoadLaunches).pipe(
    mergeMap(() => this.api.getLaunches$().pipe(
        map(allLaunches => new LaunchesLoaded(allLaunches)),
        catchError(err => of(new LaunchesNotLoaded(err.message)))
      ))
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
