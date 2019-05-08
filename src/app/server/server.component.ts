import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 1;
    serverStatus = 'Offline';

    getServerStatus() {
        this.serverStatus;
    }
}