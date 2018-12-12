import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LaunchActionTypes } from './launch.actions';

@Injectable()
export class LaunchEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(LaunchActionTypes.LoadLaunches));

  constructor(private actions$: Actions) {}
}
