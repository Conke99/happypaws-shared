import { PetType } from "../Pets/models/PetType";

export const PET_TYPE_LABELS: Record<PetType, string> = {
  [PetType.DOG]: "Dog",
  [PetType.CAT]: "Cat",
  [PetType.OTHER]: "Other",
};

export enum DogSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  GIANT = "giant",
}

export const DOG_SIZE_LABELS: Record<DogSize, string> = {
  [DogSize.SMALL]: "Small",
  [DogSize.MEDIUM]: "Medium",
  [DogSize.LARGE]: "Large",
  [DogSize.GIANT]: "Giant",
};

export enum PetAge {
  PUPPY = "puppy",
  ADULT = "adult",
  SENIOR = "senior",
}

export const PET_AGE_LABELS: Record<PetAge, string> = {
  [PetAge.PUPPY]: "Puppy",
  [PetAge.ADULT]: "Adult",
  [PetAge.SENIOR]: "Senior",
};

export const DOG_BREEDS = [
  "Golden Retriever",
  "Labrador Retriever",
  "German Shepherd",
  "Bulldog",
  "Beagle",
  "Poodle",
  "Rottweiler",
  "Yorkshire Terrier",
  "Boxer",
  "Dachshund",
  "Siberian Husky",
  "Chihuahua",
] as const;

export const CAT_BREEDS = [
  "Persian",
  "Maine Coon",
  "Siamese",
  "Ragdoll",
  "Bengal",
  "British Shorthair",
  "Sphynx",
  "Scottish Fold",
] as const;

export const OTHER_PET_SPECIES = [
  "birds",
  "rabbits",
  "hamsters",
  "reptiles",
  "fish",
  "guinea pigs",
] as const;
