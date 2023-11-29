/**
 * Group Members: Brian Zhang, Nicholas Harvey
 * Program Description: This controller handles HTTP requests for survey operations. It provides endpoints for creating a new survey and retrieving all surveys, interfacing with the SurveyService to process these requests.
 */
package com.GMU.Survey.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GMU.Survey.model.Survey;
import com.GMU.Survey.service.SurveyService;

@CrossOrigin(origins = { "http://localhost", "http://localhost:8080" })
@RestController
@RequestMapping("/api/surveys")
public class SurveyController {

    private final SurveyService surveyService;

    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @PostMapping
    public ResponseEntity<Survey> createSurvey(@RequestBody Survey survey) {
        Survey newSurvey = surveyService.saveSurvey(survey);
        return ResponseEntity.ok(newSurvey);
    }

    @GetMapping
    public ResponseEntity<List<Survey>> getAllSurveys() {
        List<Survey> surveys = surveyService.getAllSurveys();
        return ResponseEntity.ok(surveys);
    }
}