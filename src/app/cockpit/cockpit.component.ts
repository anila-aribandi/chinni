import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //Add paranthesis in the end to call the constructor of eventemitter and create
  // a new eventemitter object which is stored in servercreated
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
