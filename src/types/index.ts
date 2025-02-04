export interface RegistrationFormData {
  // Child Information
  childName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female' | 'other';
  
  // Parents Information
  fatherName: string;
  fatherNationality: string;
  fatherID: string;
  motherName: string;
  motherNationality: string;
  motherID: string;
  
  // Contact Information
  email: string;
  phone: string;
  address: string;
  
  // Additional Information
  hospitalName?: string;
  witnessName?: string;
  witnessID?: string;
}

export interface RegistrationStatus {
  id: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  updatedAt: string;
  comments?: string;
}

export type Step = 'child' | 'parents' | 'contact' | 'documents' | 'review';