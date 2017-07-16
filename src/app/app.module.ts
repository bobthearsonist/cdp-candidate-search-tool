import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReflowFormComponent } from './reflow-form/reflow-form.component';
//import { ReflowComponent } from './reflow/reflow.component';

@NgModule({
  declarations: [
    AppComponent,
    ReflowFormComponent//,
 //   ReflowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
