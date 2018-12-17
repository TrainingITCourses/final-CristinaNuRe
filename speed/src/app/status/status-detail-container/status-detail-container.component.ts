import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StatusState } from '../store/status.reducer';
import { Launch } from 'src/app/store/models/launch';
import { SortLaunchesAsc, SortLaunchesDesc } from '../store/status.actions';
import { GlobalState } from 'src/app/store/global-state.reducer';
import { ChangeSectionTitle } from 'src/app/store/global-state.actions';
import { Status } from 'src/app/store/models/status';

@Component({
  selector: 'app-status-detail-container',
  templateUrl: './status-detail-container.component.html',
  styleUrls: ['./status-detail-container.component.css']
})
export class StatusDetailContainerComponent implements OnInit {

  public filteredLaunches: Launch[];
  public launchesCount: number;
  private selectedStatusId: number;
  private selectedStatus: Status;

  constructor(private route: ActivatedRoute, 
    private globalStore: Store<GlobalState>,
    private localStore: Store<StatusState>) { }

  ngOnInit() {
    this.selectedStatusId = Number(this.route.snapshot.paramMap.get('id'));

    this.localStore.select<StatusState>('status').subscribe((statusState: StatusState) => {
      if (!statusState.loading) {
        this.selectedStatus = statusState.allStatus
          .filter(status => status.id == this.selectedStatusId)[0];

        this.setSectionTitle(this.selectedStatus.name);

        this.filteredLaunches = statusState.allLaunches
          .filter((launch: Launch) => launch.status == this.selectedStatusId);

        this.launchesCount = this.filteredLaunches.length;
      }
    });
  }

  private setSectionTitle(statusName: string) {
    let newTitle: string = 'Status Type: ' + statusName;
    this.globalStore.dispatch(new ChangeSectionTitle(newTitle));
  }

  public onSortLaunchesAscendant() {
      this.localStore.dispatch(new SortLaunchesAsc());
  }

  public onSortLaunchesDescendant() {
    this.localStore.dispatch(new SortLaunchesDesc());
  }

}
