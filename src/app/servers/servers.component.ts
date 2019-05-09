import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer = false;
  serverCreationStatus = 'server is not created';
  serverName = 'Server Test';

  constructor() {
    setInterval(() => this.addNewServer = true, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created! Name is ' + this.serverName;
  }

  onSetName(ev: Event) {
    this.serverName = (ev.target as HTMLInputElement).value;
  }
}
