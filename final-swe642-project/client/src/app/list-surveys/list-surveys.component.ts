/**
 * Group Members: Brian Zhang, Nicholas Harvey
 * Component Description: This component is responsible for listing all survey entries. It retrieves survey data using the SurveyService and displays it. The component handles both the successful retrieval of data and error scenarios.
 */

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
