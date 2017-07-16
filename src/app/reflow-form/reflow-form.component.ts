import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Reflow } from '../reflow/reflow.model';

@Component({
  selector: 'app-reflow-form',
  templateUrl: './reflow-form.component.html',
  styleUrls: ['./reflow-form.component.css']
})
export class ReflowFormComponent implements OnInit {
  reflows:Array<Reflow>//TODO: store in a parent componenet for reflows 
  
  constructor() { 
    this.reflows = new Array<Reflow>();//TODO: populate from web store
  }

  ngOnInit() {
  }

  reflowButtonClicked(clientkey: HTMLInputElement): boolean {
    console.log(`reflowing: ${clientkey.value}`);
    
    let newReflow =  new Reflow(clientkey.value, "CandidateSearch");
    this.reflows.push(newReflow);

    return false; 
  }
}
