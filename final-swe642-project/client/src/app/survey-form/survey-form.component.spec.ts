/**
 * Group Members: Brian Zhang, Nicholas Harvey
 * Test Description: This is use for testing the component 
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormComponent } from './survey-form.component';

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyFormComponent]
    });
    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
