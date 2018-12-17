import { LaunchActions, LaunchActionTypes } from './launch.actions';
import { Launch } from 'src/app/store/models/launch';

export interface LaunchesState {
  allLaunches: Launch[],
  loading: boolean,
  message: string
}

export const initialState: LaunchesState = {
  allLaunches: [],
  loading: false,
  message: ''
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {

  switch (action.type) {
    
    case LaunchActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case LaunchActionTypes.LaunchesLoaded:
      return { ...state, allLaunches: action.payload, loading: false }
    case LaunchActionTypes.LaunchesNotLoaded:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
