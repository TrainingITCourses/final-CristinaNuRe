import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export type LaunchActions = LoadLaunches;
