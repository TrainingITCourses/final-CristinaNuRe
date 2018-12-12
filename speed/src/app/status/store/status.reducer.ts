import { Action } from '@ngrx/store';
import { StatusActions, StatusActionTypes } from './status.actions';

export interface StatusState {
  allStatus: any[],
  loading: boolean
}

export const initialState: StatusState = {
  allStatus: [],
  loading: false
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  switch (action.type) {

    case StatusActionTypes.LoadStatus:
      return state;
    default:
      return state;
  }
}
