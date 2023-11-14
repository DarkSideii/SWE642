import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  constructor(
    private router: Router,
    private surveyService: SurveyService
  ) {}

  user = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    telephone: '', 
    date: '',
    email: '',
    dateOfSurvey: '',
    students: false,
    location: false,
    campus: false,
    atmosphere: false,
    dorms: false,
    sports: false,
    interestOrigin: null,
    recommendationLikelihood: null,
    feedback: null,
    additionalComments: null
  };

  // Error messages will be stored here
  formErrors: { [key: string]: string } = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
  };

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
  }
    // Clear previous errors
    this.clearFormErrors();

    // Validate each field and accumulate error messages
    this.formErrors['firstName'] = this.validateName(this.user.firstName, "first").join(' ');
    this.formErrors['lastName'] = this.validateName(this.user.lastName, "last").join(' ');
    this.formErrors['address'] = this.validateAddress(this.user.address).join(' ');
    this.formErrors['city'] = this.validateCity(this.user.city).join(' ');
    this.formErrors['state'] = this.validateState(this.user.state).join(' ');

    // Collect error messages
    const errorMessages = this.collectErrorMessages();

    // Check if there are any error messages
    if (errorMessages.length) {
      // Alert the error messages
      window.alert(errorMessages);
      return; // Stop the submission since there are errors
    }
    // If there are no errors, proceed with form submission
    console.log('Form data', form.value);
    // After submission logic, navigate to the root page
    
    // form submission logic
    this.router.navigate(['/']);
    if (errorMessages.length === 0) {
      this.surveyService.submitSurvey(form.value)
        .subscribe({
          next: (newSurvey) => {
            console.log('Survey submitted successfully', newSurvey);
            this.router.navigate(['/']); // Navigate after successful submission
          },
          error: (err) => {
            console.error('Error submitting survey', err);
            window.alert('An error occurred while submitting the survey');
          }
        });
    }
  
    
  }

  // Helper method to collect error messages
  private collectErrorMessages(): string {
    return Object.values(this.formErrors).filter(error => error.length > 0).join('\n');
  }

  private clearFormErrors() {
    for (const key in this.formErrors) {
      if (this.formErrors.hasOwnProperty(key)) {
        const formKey = key as keyof typeof this.formErrors;
        this.formErrors[formKey] = '';
      }
    }
  }

  validateName(name: string, type:string): string[] {
    let message = ""
    if(type === "first"){
      message = "First name should only contain alphabet letters."
    }
    else{
      message = "Last name should only contain alphabet letters."
    }
    const regexName = /^[a-zA-Z\s]+$/;
    return regexName.test(name) ? [] : [message];
  }

  validateAddress(address: string): string[] {
    const regexAddress = /^\d+\s[A-Za-z0-9\s.,'-]+$/;
    return regexAddress.test(address) ? [] : ["Address is not fomrmatted correctly, it should only contain alphanumeric values, commas, periods, apostrophes, hyphens, and spaces."];
  }

  validateCity(city: string): string[] {
    const regexCity = /^[A-Za-z\s]+$/;
    return regexCity.test(city) ? [] : ["City should only contain letters and spaces."];
  }

  validateState(state: string): string[] {
    const regexState = /^[A-Za-z]{2}$/;
    const statesArray = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL',
      'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
      'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
      'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];
    return regexState.test(state) && statesArray.includes(state.toUpperCase()) ? [] : ["State should be a 2-letter code corresponding to a valid US state."];
  }

  onReset(form: NgForm) {
    // Reset the form (including user values)
    form.resetForm();
  
    // Clear form errors
    this.clearFormErrors();
  
    // Clear radio buttons and checkboxes
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  
    const radios = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');
    radios.forEach((radio) => {
      radio.checked = false;
    });
  
    // Clear datalists
    const datalists = document.querySelectorAll<HTMLInputElement>('input[list]');
    datalists.forEach((datalist) => {
      datalist.value = '';
    });
  
    // Clear text areas
    const textareas = document.querySelectorAll<HTMLTextAreaElement>('textarea');
    textareas.forEach((textarea) => {
      textarea.value = '';
    });
  }
  
}