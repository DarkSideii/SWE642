
export interface Survey {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  telephone: string;
  email: string;
  dateOfSurvey: Date | string;
  students: boolean;
  location: boolean;
  campus: boolean;
  atmosphere: boolean;
  dorms: boolean;
  sports: boolean;
  interestOrigin?: 'friends' | 'television' | 'internet' | 'other';
  recommendationLikelihood?: 'very_Likely' | 'likely' | 'unlikely' | 'not_sure';
  feedback?: string;
  additionalComments?: string;
}
