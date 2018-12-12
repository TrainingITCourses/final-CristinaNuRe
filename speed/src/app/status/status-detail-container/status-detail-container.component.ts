import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-detail-container',
  templateUrl: './status-detail-container.component.html',
  styleUrls: ['./status-detail-container.component.css']
})
export class StatusDetailContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadLaunches();
  }

  private loadLaunches() {
    const statusId = this.route.snapshot.paramMap.get('id');
    // TODO cargan aqui los lanzamientos con el estado recibido -> loadLaunchesByStatusId
    console.log('Se carga lista de lanzamientos que tengan estado con id: ' + statusId);
  }

}
