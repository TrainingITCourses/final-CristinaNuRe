import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromGlobalState from './global-state.reducer';

export interface State {
  router: any;
  globalState: fromGlobalState.GlobalState;

}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  globalState: fromGlobalState.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
