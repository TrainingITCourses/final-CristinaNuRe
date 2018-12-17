import { Action } from '@ngrx/store';

export enum GlobalStateActionTypes {
  ChangeSectionTitle = '[GlobalState] Change Section Title'
}

export class ChangeSectionTitle implements Action {
  readonly type = GlobalStateActionTypes.ChangeSectionTitle;
  constructor(readonly payload: string) {};
}

export type GlobalStateActions = ChangeSectionTitle;
