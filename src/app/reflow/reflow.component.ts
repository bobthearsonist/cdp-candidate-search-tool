import { Component, Input, OnInit } from '@angular/core';
import { Reflow } from './reflow.model';

@Component({
  selector: 'app-reflow',
  templateUrl: './reflow.component.html',
  styleUrls: ['./reflow.component.css']
})
export class ReflowComponent implements OnInit {
  @Input() reflow:Reflow;
  constructor() { }

  getStatusOfReflow(){
    //get some sort of displayable vlaue indicating the number of rows left for the reflow
  }

  ngOnInit() {
  }

}
