import { PetType } from '../constants';

export interface PetTraits {
  /** 'yes' | 'no' | 'depends' */
  houseTrained?: string;
  /** 'yes' | 'no' | 'depends' */
  litterTrained?: string;
  /** 'yes' | 'no' | 'depends' */
  friendlyWithChildren?: string;
  /** 'yes' | 'no' | 'depends' */
  friendlyWithDogs?: string;
  /** 'yes' | 'no' | 'depends' */
  friendlyWithCats?: string;
  energyLevel?: 'high' | 'moderate' | 'low';
  canBeLeftAlone?: string;
  hasMedications?: boolean;
  specialCare?: string;
}

export interface DogTraits extends PetTraits {
  isMixBreed: boolean;
}

export interface CatTraits extends PetTraits {
  isMixBreed: boolean;
  /** 'indoor' | 'outdoor' | 'both' */
  indoorOutdoor?: string;
  declawed?: boolean;
}

export interface OtherPetTraits {
  petSpecies: string;
  habitatType: string;
  /** 'yes' | 'no' | 'withCare' */
  canBeHandled?: string;
  specialCare?: string;
}

export interface Pet {
  id: string;
  clientId: string;
  name: string;
  type: PetType;
  breed: string;
  age: string;
  /** 'puppy' | 'adult' | 'custom' */
  ageType: string;
  gender: 'male' | 'female';
  photoUrl: string | null;
  photoGallery: string[];
  description: string;
  traits: DogTraits | CatTraits | OtherPetTraits;
  additionalInfo: string;
  bookingCount: number;
  isPrimary: boolean;
  createdAt: Date;
  updatedAt: Date;
}
