import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey.model';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-list-surveys',
  templateUrl: './list-surveys.component.html',
  styleUrls: ['./list-surveys.component.css']
})
export class ListSurveysComponent implements OnInit{
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getAllSurveys().subscribe(
      (data) => {
        this.surveys = data;
      },
      (error) => {
        console.error('Error fetching surveys', error);
      }
    );
  }
}
