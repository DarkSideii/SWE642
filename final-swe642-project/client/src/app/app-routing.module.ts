import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSurveysComponent } from './list-surveys/list-surveys.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'survey-form', component: SurveyFormComponent }, 
  { path: 'list-surveys', component: ListSurveysComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
