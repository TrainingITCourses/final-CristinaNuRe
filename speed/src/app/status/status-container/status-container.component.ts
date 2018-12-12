import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.css']
})
export class StatusContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadStatus();
  }

  private loadStatus() {
        // TODO cargar aqui todos los estados
        console.log('Se carga lista de estados');
  }
}
