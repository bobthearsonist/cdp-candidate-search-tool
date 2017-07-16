import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ReflowApiService } from '../reflow-api/reflow-api.service';
import { Reflow } from '../reflow/reflow.model';

@Component({
  selector: 'app-reflow-status',
  templateUrl: './reflow-status.component.html',
  styleUrls: ['./reflow-status.component.css']
})
export class ReflowStatusComponent implements OnInit {
  reflowSubscription:Subscription;
  reflows:Array<Reflow>//TODO: store in a parent componenet for reflows 

  constructor(private _reflowService:ReflowApiService) { 
      this.reflows = new Array<Reflow>();//TODO: populate from web store
      
      this.reflowSubscription = _reflowService.reflowSubject$.subscribe((value)=>{
        this.reflowResponseReceived(JSON.stringify(value));
      })      
  }

  reflowResponseReceived(response:any)
  {
    console.log("received a response from the API server");
    console.log(response);
    //this.reflows.push(newReflow);
  }

  ngOnInit() {
  }

}
