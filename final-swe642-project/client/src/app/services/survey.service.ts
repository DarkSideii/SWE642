/**
 * Group Members: Brian Zhang, Nicholas Harvey
 * Service Description: This service provides functionalities to interact with the backend for survey operations. It includes methods to submit a new survey and retrieve all surveys from the server.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from "../models/survey.model";

@Injectable({ providedIn: 'root' })
export class SurveyService {
  private apiUrl = 'http://localhost:8080/api/surveys';

  constructor(private http: HttpClient) {}

  submitSurvey(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(this.apiUrl, survey);
  }

  getAllSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.apiUrl);
  }
}