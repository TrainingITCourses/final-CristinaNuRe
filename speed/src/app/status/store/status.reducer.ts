import { StatusActions, StatusActionTypes } from './status.actions';
import { Launch } from 'src/app/store/models/launch';

export interface StatusState {
  allStatus: any[],
  allLaunches: Launch[],
  loading: boolean
}

export const initialState: StatusState = {
  allStatus: [],
  allLaunches: [],
  loading: false
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  
  switch (action.type) {

    case StatusActionTypes.LoadStatus:
    case StatusActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case StatusActionTypes.StatusLoaded:
      return { ...state, allStatus: action.payload, loading: false }
    case StatusActionTypes.LaunchesLoaded:
      return { ...state, allLaunches: action.payload, loading: false }
    default:
      return state;
  }
}
