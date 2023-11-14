package com.GMU.Survey.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.GMU.Survey.model.Survey;
import com.GMU.Survey.repository.SurveyRepository;

@Service
public class SurveyService {

    private final SurveyRepository surveyRepository;

    public SurveyService(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    public Survey saveSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    // Additional methods can be added to handle more complex business requirements
}