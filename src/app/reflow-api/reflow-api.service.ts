import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { ReflowRequest } from './reflow-api.model';

@Injectable()
export class ReflowApiService {

  _reflowSubject = new Subject<Array<string>>();
  reflowSubject$: Observable<any>;
  constructor(private http: Http) {
    this.reflowSubject$ = this._reflowSubject.asObservable();
   }

  mysupplyBaseApiUri= "https://api.careerbuilder.com/candidatedata/mysupply/"

  reflow(clientKey:string,type:string)
  {
    console.log("I am making a request");
    
    let uri = "/reflow"

    let body = new ReflowRequest(clientKey,type,"Both");
    
    this.http.post(uri,body)
    .do(data => {
      console.log("data received in response")
      console.log(data)
    })
    .map(response => response.json())
    .map((response: any) => {
        console.log("publishing item to subject")
        console.log(response)
        this._reflowSubject.next(response);
      })
    .subscribe()
  }
}