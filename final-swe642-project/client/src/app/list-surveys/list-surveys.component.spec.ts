/**
 * Group Members: Brian Zhang, Nicholas Harvey
 * Test Description: This test file contains unit tests for the ListSurveysComponent. It ensures that the component is properly created and functions as expected in an isolated testing environment.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSurveysComponent } from './list-surveys.component';

describe('ListSurveysComponent', () => {
  let component: ListSurveysComponent;
  let fixture: ComponentFixture<ListSurveysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSurveysComponent]
    });
    fixture = TestBed.createComponent(ListSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
