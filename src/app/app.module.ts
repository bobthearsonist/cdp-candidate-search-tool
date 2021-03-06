import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReflowFormComponent } from './reflow-form/reflow-form.component';
import { ReflowComponent } from './reflow/reflow.component';
import { ReflowStatusComponent } from './reflow-status/reflow-status.component';
import { ReflowApiService } from './reflow-api/reflow-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ReflowFormComponent,
    ReflowComponent,
    ReflowStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
    providers: [
    ReflowApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
