import { StatusActions, StatusActionTypes } from './status.actions';
import { Launch } from 'src/app/store/models/launch';

export interface StatusState {
  allStatus: any[],
  allLaunches: Launch[],
  filteredLaunches: Launch[],
  loading: boolean,
  message: string
}

export const initialState: StatusState = {
  allStatus: [],
  allLaunches: [],
  filteredLaunches: [],
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
    case StatusActionTypes.OrderLaunchesAsc:
      state.filteredLaunches.sort((launch1, launch2) => (launch1.name < launch2.name ? 1 : -1));
      return {... state};
    case StatusActionTypes.OrderLaunchesDesc:
      state.filteredLaunches.sort((launch1, launch2) => (launch1.name > launch2.name ? 1 : -1));
      return {... state};
    default:
      return state;
  }
}
