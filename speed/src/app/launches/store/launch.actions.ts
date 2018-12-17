import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches',
  LaunchesLoaded = '[Launch] Launches Loaded',
  LaunchesNotLoaded = '[Launch] Launches Not Loaded'  
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;
  constructor(readonly payload: any[]) {};
}

export class LaunchesNotLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesNotLoaded;
  constructor(readonly payload: string) {};
}

export type LaunchActions = LoadLaunches | LaunchesLoaded | LaunchesNotLoaded;
