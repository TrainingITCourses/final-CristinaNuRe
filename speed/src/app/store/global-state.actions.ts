import { Action } from '@ngrx/store';

export enum GlobalStateActionTypes {
  LoadSectionTitle = '[GlobalState] Load Section Title',
  ChangeSectionTitle = '[GlobalState] Change Section Title'
}

export class LoadSectionTitle implements Action {
  readonly type = GlobalStateActionTypes.LoadSectionTitle;
}

export class ChangeSectionTitle implements Action {
  readonly type = GlobalStateActionTypes.ChangeSectionTitle;
  constructor(readonly payload: string) {};
}

export type GlobalStateActions = LoadSectionTitle | ChangeSectionTitle;
