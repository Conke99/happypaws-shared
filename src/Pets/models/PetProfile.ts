import {
  AgeType,
  CanBeHandled,
  CommonAnswersPets,
  EnergyLevel,
  Gender,
  IndoorOutdoor,
} from './common/CommonAnswersPets';
import { PetType } from './PetType';

export default interface PetProfile {
  id?: string;
  userId?: string;
  petName?: string;
  type?: PetType;
  breed?: string | null;
  isMixBreed?: boolean;
  age?: string | null;
  gender?: Gender | null;
  description?: string | null;
  photoUrl?: string | null;
  photoGallery?: string[];
  ageType?: AgeType;

  // Dog
  houseTrained?: CommonAnswersPets | null;
  friendlyWithChildren?: CommonAnswersPets | null;
  friendlyWithDogs?: CommonAnswersPets | null;
  friendlyWithCats?: CommonAnswersPets | null;
  energyLevel?: EnergyLevel | null;
  canBeLeftAlone?: string | null;
  additionalInfo?: string | null;

  // Cat
  litterTrained?: CommonAnswersPets | null;
  indoorOutdoor?: IndoorOutdoor | null;
  declawed?: CommonAnswersPets | null;

  // Other
  petSpecies?: string | null;
  habitatType?: string | null;
  canBeHandled?: CanBeHandled | null;
  specialCare?: string | null;

  createdAt?: Date;
  updatedAt?: Date;
}
