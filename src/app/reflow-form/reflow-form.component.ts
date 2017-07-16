import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflow-form',
  templateUrl: './reflow-form.component.html',
  styleUrls: ['./reflow-form.component.css']
})
export class ReflowFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    reflowButtonClicked(clientkey: HTMLInputElement): boolean {
      console.log(`reflowing: ${clientkey.value}`);
      return false; 
    }
}
