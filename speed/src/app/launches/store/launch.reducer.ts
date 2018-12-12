import { Action } from '@ngrx/store';
import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchesState {
  allLaunches: any[]
}

export const initialState: LaunchesState = {
  allLaunches: []
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {

    case LaunchActionTypes.LoadLaunches:
      return state;


    default:
      return state;
  }
}
