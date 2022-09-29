import { 
  Component,
  ElementRef,
  EventEmitter,
  Output, 
  ViewChild, 
  ViewEncapsulation
 } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent {

  //newServerName = '';
  //newServerContent = '';
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName: string; serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string; serverContent: string}>();

  onAddServer(nameInput:HTMLInputElement) {
    //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
