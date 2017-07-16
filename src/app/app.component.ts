import { Component } from '@angular/core';
import { Reflow } from './reflow/reflow.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    reflows:Array<Reflow>;

    constructor(){
      this.reflows = new Array<Reflow>();//get this from a store somewhere
    }
}
