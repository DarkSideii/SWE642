import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // This already imports RouterModule
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ListSurveysComponent } from './list-surveys/list-surveys.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    ListSurveysComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
