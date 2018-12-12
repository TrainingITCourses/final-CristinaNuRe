import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-detail-container',
  templateUrl: './launch-detail-container.component.html',
  styleUrls: ['./launch-detail-container.component.css']
})
export class LaunchDetailContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadLaunch();
  }

  private loadLaunch() {
    const launchId = this.route.snapshot.paramMap.get('id');
    // TODO cargar aqui la info del lanzamiento identificado por id -> loadLaunchById
    console.log('Se carga el lanzamiento con id: ' + launchId);
  }

}
