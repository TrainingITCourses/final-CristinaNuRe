import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { LoadStatus } from '../store/status.actions';
import { StatusState } from '../store/status.reducer';
import { GlobalState } from 'src/app/store/global-state.reducer';
import { ChangeSectionTitle } from 'src/app/store/global-state.actions';
import { Status } from 'src/app/store/models/status';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.css']
})
export class StatusContainerComponent implements OnInit {

  public status: Status[];
  private title: string = 'Number of launches';

  constructor(private globalStore: Store<GlobalState>, private localStore: Store<State>) {}

  ngOnInit() {
    this.changeSectionTitle(this.title);
    this.loadAllStatus();

    this.localStore.select('status').subscribe((statusState: StatusState) => {
      this.status = statusState.allStatus;
    });
  }

  private changeSectionTitle(newTitle: string) {
    this.globalStore.dispatch(new ChangeSectionTitle(newTitle));
  }

  private loadAllStatus() {
    this.localStore.dispatch(new LoadStatus());
  }
}
