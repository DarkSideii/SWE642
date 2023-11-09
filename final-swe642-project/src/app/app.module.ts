import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // This already imports RouterModule
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
