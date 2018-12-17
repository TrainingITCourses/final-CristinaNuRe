import { Action } from '@ngrx/store';

export enum SectionTitleActionTypes {
  LoadSectionTitles = '[SectionTitle] Load SectionTitles'
}

export class LoadSectionTitles implements Action {
  readonly type = SectionTitleActionTypes.LoadSectionTitles;
}

export type SectionTitleActions = LoadSectionTitles;
