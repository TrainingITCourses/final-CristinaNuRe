import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StatusActionTypes, StatusLoaded } from './status.actions';
import { ApiService } from 'src/app/store/services/api.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class StatusEffects {

  @Effect()
  public load$ = this.actions$.ofType(StatusActionTypes.LoadStatus).pipe(
    mergeMap(() => this.api.getLaunchStatus$().pipe(
        map(allLaunchStatus => new StatusLoaded(allLaunchStatus))
      ))
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
