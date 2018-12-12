import { Action } from '@ngrx/store';

export enum StatusActionTypes {
  LoadStatus = '[Status] Load Status',
  StatusLoaded = '[Status] Status Loaded',
  StatusNotLoaded = '[Status] Status Not Loaded',
  LoadLaunches = '[Status] Load Launches',
  LaunchesLoaded = '[Status] Launches Loaded',
  LaunchesNotLoaded = '[Status] Launches Not Loaded'
}

export class LoadStatus implements Action {
  readonly type = StatusActionTypes.LoadStatus;
}

export class StatusLoaded implements Action {
  readonly type = StatusActionTypes.StatusLoaded;
  constructor(readonly payload: any[]) {};
}

export class StatusNotLoaded implements Action {
  readonly type = StatusActionTypes.StatusNotLoaded;
  constructor(readonly payload: any[]) {};
}

export class LoadLaunches implements Action {
  readonly type = StatusActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = StatusActionTypes.LaunchesLoaded;
  constructor(readonly payload: any[]) {};
}

export class LaunchesNotLoaded implements Action {
  readonly type = StatusActionTypes.LaunchesNotLoaded;
  constructor(readonly payload: any[]) {};
}

export type StatusActions = LoadStatus 
  | StatusLoaded 
  | StatusNotLoaded
  | LoadLaunches
  | LaunchesLoaded
  | LaunchesNotLoaded;
