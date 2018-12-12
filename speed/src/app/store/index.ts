import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromStatus from '../status/store/status.reducer';
import * as fromLaunch from '../launches/store/launch.reducer';

export interface State {
  router: any;
  status: fromStatus.StatusState;
  launches: fromLaunch.LaunchesState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  status: fromStatus.reducer,
  launches: fromLaunch.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
