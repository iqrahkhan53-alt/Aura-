export interface Doctor {
  id: string;
  name: string;
  title: string;
  imcNumber: string; // Irish Medical Council registration number
  qualifications: string;
  role: string;
  specialty: string;
  photoUrl: string;
  bio: string;
  consultationFee: number;
  languages: string[];
  nextAvailable: string;
}

export interface MedicalService {
  id: string;
  title: string;
  slug: string;
  category: 'General Practice' | 'Diagnostics' | 'Specialist Care' | 'Women\'s Health' | 'Men\'s Health';
  shortDesc: string;
  fullDesc: string;
  priceEur: number;
  durationMins: number;
  isPrsiEligible: boolean;
  isInsuranceCovered: boolean;
  popular?: boolean;
  keyBenefits: string[];
}

export interface PatientReview {
  id: string;
  patientName: string;
  location: string;
  date: string;
  rating: number;
  serviceReceived: string;
  doctorName: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ClinicInfo {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  county: string;
  eircode: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleRating: number;
  reviewCount: number;
  transit: {
    luas: string;
    bus: string;
    parking: string;
  };
}
