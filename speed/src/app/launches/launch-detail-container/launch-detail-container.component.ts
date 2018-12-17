import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/store/global-state.reducer';
import { LaunchesState } from '../store/launch.reducer';
import { LoadLaunches } from '../store/launch.actions';
import { Launch } from 'src/app/store/models/launch';
import { ChangeSectionTitle } from 'src/app/store/global-state.actions';

@Component({
  selector: 'app-launch-detail-container',
  templateUrl: './launch-detail-container.component.html',
  styleUrls: ['./launch-detail-container.component.css']
})
export class LaunchDetailContainerComponent implements OnInit {

  public launch: Launch;
  private selectedLaunchId: number;

  constructor(private route: ActivatedRoute,
    private globalStore: Store<GlobalState>,
    private localStore: Store<LaunchesState>) { }

  ngOnInit() {
    this.selectedLaunchId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadLaunches();

    this.localStore.select<LaunchesState>('launch').subscribe((launchesState: LaunchesState) => {     
      if (!launchesState.loading) {
        this.launch = launchesState.allLaunches
          .filter(launch => launch.id == this.selectedLaunchId)[0];

        this.setSectionTitle(this.launch.name);
      }
    });    
  }

  private loadLaunches() {
    this.localStore.dispatch(new LoadLaunches);
  }

  private setSectionTitle(launchName: string) {
    let newTitle: string = 'Launch: ' + launchName;
    this.globalStore.dispatch(new ChangeSectionTitle(newTitle));
  }  
}
