import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  numbers = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onStartGame(startData: {inc: number}) {
    this.numbers.push(startData.inc);
    console.log(startData.inc);
  }

  onStopGame(stopData: {interval: number}) {
    clearInterval(stopData.interval);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!!';
    this.serverElements[0].content = 'DSAF';
    // this.serverElements[0] = {type: 'server', name: 'dfsdf', content: 'kdaj'};
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
