import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import type PetProfile from '../models/PetProfile';
import { PetType } from '../models/PetType';
import {
  AgeType,
  CanBeHandled,
  CommonAnswersPets,
  EnergyLevel,
  Gender,
  IndoorOutdoor,
} from '../models/common/CommonAnswersPets';

export class AddPetDto implements PetProfile {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsString()
  @IsOptional()
  petName?: string;

  @IsEnum(PetType)
  @IsOptional()
  type?: PetType;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsBoolean()
  isMixBreed?: boolean;

  @IsOptional()
  @IsString()
  age?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photoGallery?: string[];

  @IsOptional()
  @IsEnum(AgeType)
  ageType?: AgeType;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  houseTrained?: CommonAnswersPets;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  friendlyWithChildren?: CommonAnswersPets;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  friendlyWithDogs?: CommonAnswersPets;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  friendlyWithCats?: CommonAnswersPets;

  @IsOptional()
  @IsEnum(EnergyLevel)
  energyLevel?: EnergyLevel;

  @IsOptional()
  @IsString()
  canBeLeftAlone?: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  litterTrained?: CommonAnswersPets;

  @IsOptional()
  @IsEnum(IndoorOutdoor)
  indoorOutdoor?: IndoorOutdoor;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  declawed?: CommonAnswersPets;

  @IsOptional()
  @IsString()
  petSpecies?: string;

  @IsOptional()
  @IsString()
  habitatType?: string;

  @IsOptional()
  @IsEnum(CanBeHandled)
  canBeHandled?: CanBeHandled;

  @IsOptional()
  @IsString()
  specialCare?: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  constructor(partial?: Partial<PetProfile>) {
    Object.assign(this, partial);
  }
}
