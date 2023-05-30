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
  //newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput.value);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

}
