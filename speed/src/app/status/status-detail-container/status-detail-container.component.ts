import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StatusState } from '../store/status.reducer';
import { Launch } from 'src/app/store/models/launch';
import { LoadLaunches } from '../store/status.actions';

@Component({
  selector: 'app-status-detail-container',
  templateUrl: './status-detail-container.component.html',
  styleUrls: ['./status-detail-container.component.css']
})
export class StatusDetailContainerComponent implements OnInit {

  public launches: Launch[];

  constructor(private route: ActivatedRoute, private store: Store<StatusState>) { }

  ngOnInit() {
    this.loadLaunches();

    this.store.select<StatusState>('status').subscribe((statusState: StatusState) => {
      this.launches = statusState.allLaunches;
    });
  }

  private loadLaunches() {
    const statusId = this.route.snapshot.paramMap.get('id');
    // TODO cargan aqui los lanzamientos con el estado recibido -> loadLaunchesByStatusId
    this.store.dispatch(new LoadLaunches);
    console.log('Se carga lista de lanzamientos que tengan estado con id: ' + statusId);
  }

}
