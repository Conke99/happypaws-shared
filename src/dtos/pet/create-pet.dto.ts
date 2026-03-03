export interface CreatePetDto {
  /** 'dog' | 'cat' | 'other' */
  type: string;
  name: string;
  breed: string;
  isMixBreed?: boolean;
  age: string;
  /** 'puppy' | 'adult' | 'custom' */
  ageType: string;
  gender: 'male' | 'female';
  description?: string;
  photoUrl?: string | null;
  additionalInfo?: string;

  // Traits (dog/cat)
  houseTrained?: string;
  litterTrained?: string;
  friendlyWithChildren?: string;
  friendlyWithDogs?: string;
  friendlyWithCats?: string;
  energyLevel?: string;
  canBeLeftAlone?: string;
  hasMedications?: boolean;
  specialCare?: string;

  // Cat-specific
  indoorOutdoor?: string;
  declawed?: boolean;

  // Other pets
  petSpecies?: string;
  habitatType?: string;
  canBeHandled?: string;
}
