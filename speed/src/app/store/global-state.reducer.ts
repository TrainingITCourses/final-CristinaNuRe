import { Action } from '@ngrx/store';
import { GlobalStateActionTypes, GlobalStateActions } from './global-state.actions';


export interface GlobalState {
  sectionTitle: string
}

export const initialState: GlobalState = {
  sectionTitle: ''
};

export function reducer(state = initialState, action: GlobalStateActions): GlobalState {
  
  switch (action.type) {
    case GlobalStateActionTypes.LoadSectionTitle:
      return {... state};
    case GlobalStateActionTypes.ChangeSectionTitle:
      return {... state, sectionTitle: action.payload};
    default:
      return state;
  }
}
