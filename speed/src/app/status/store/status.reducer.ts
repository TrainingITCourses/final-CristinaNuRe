import { StatusActions, StatusActionTypes } from './status.actions';
import { Launch } from 'src/app/store/models/launch';

export interface StatusState {
  allStatus: any[],
  allLaunches: Launch[],
  loading: boolean,
  message: string
}

export const initialState: StatusState = {
  allStatus: [],
  allLaunches: [],
  loading: false,
  message: ''
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  
  switch (action.type) {

    case StatusActionTypes.LoadStatus:
    case StatusActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case StatusActionTypes.StatusLoaded:
      return { ...state, allStatus: action.payload, loading: false }
    case StatusActionTypes.StatusNotLoaded:
      return {...state, message: action.payload};
    case StatusActionTypes.LaunchesLoaded:
      return { ...state, allLaunches: action.payload, loading: false }
    case StatusActionTypes.LaunchesNotLoaded:
      return { ...state, message: action.payload };
    case StatusActionTypes.SortLaunchesAsc:
      state.allLaunches.sort((launch1, launch2) => (launch1.windowstart > launch2.windowstart ? 1 : -1));
      return {... state};
    case StatusActionTypes.SortLaunchesDesc:
      state.allLaunches.sort((launch1, launch2) => (launch1.windowstart < launch2.windowstart ? 1 : -1));
      return {... state};
    default:
      return state;
  }
}
