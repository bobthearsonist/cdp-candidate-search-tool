import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Reflow } from '../reflow/reflow.model';
import { ReflowApiService } from '../reflow-api/reflow-api.service';

@Component({
  selector: 'app-reflow-form',
  templateUrl: './reflow-form.component.html',
  styleUrls: ['./reflow-form.component.css']
})
export class ReflowFormComponent implements OnInit {
  
  constructor(private _reflowService:ReflowApiService) { 
  }

  ngOnInit() {
  }

  reflowButtonClicked(clientkey: HTMLInputElement): boolean {
    console.log(`reflowing: ${clientkey.value}`);
    
    let newReflow =  new Reflow(clientkey.value, "CandidateSearch");
    
    this._reflowService.reflow(newReflow.clientkey, newReflow.type)

    return false; 
  }
}
