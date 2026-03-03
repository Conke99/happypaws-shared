import { ServiceType, HomeType, CancellationPolicyType } from '../constants';

export interface SitterService {
  type: ServiceType;
  enabled: boolean;
  price: number;
  description: string;
}

export interface SitterHome {
  /** 'house' | 'apartment' | 'condo' | 'other' */
  type: HomeType;
  size: string;
  hasFencedYard: boolean;
  hasPets: boolean;
  petsDescription: string;
  hasChildren: boolean;
  childrenAges: string;
  smoking: boolean;
  photos: string[];
}

export interface SitterPetPreferences {
  dogs: {
    sizes: string[];
    ages: string[];
    maxNumber: number;
  };
  cats: {
    accepted: boolean;
    maxNumber: number;
  };
  otherPets: string[];
  requirements: {
    houseTrained: boolean;
    vaccinated: boolean;
    spayedNeutered: boolean;
  };
}

export interface SitterCancellationPolicy {
  type: CancellationPolicyType;
  description: string;
}

export interface SitterProfile {
  id: string;
  userId: string;
  bio: string;
  experience: string;
  languages: string[];
  photoGallery: string[];
  rating: number;
  reviewCount: number;
  responseTime: string;
  responseRate: number;
  verified: boolean;
  backgroundCheckCompleted: boolean;
  city: string;
  state: string;
  zipCode: string;
  lat: number;
  lng: number;
  services: SitterService[];
  home: SitterHome;
  petPreferences: SitterPetPreferences;
  /** Map of 'YYYY-MM-DD' → available */
  availability: Record<string, boolean>;
  cancellationPolicy: SitterCancellationPolicy;
  questionsForOwners: string[];
  weekendRate: number;
  holidayRate: number;
  multiPetDiscount: number;
  createdAt: Date;
  updatedAt: Date;
}
