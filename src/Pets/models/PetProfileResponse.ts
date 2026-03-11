import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import type PetProfile from './PetProfile';
import { PetType } from './PetType';
import {
  AgeType,
  CanBeHandled,
  CommonAnswersPets,
  EnergyLevel,
  IndoorOutdoor,
} from './common/CommonAnswersPets';

// TODO: This is an entity not a type. fix it
export class PetProfileResponse implements PetProfile {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  userId?: string;

  @IsEnum(PetType)
  type!: PetType;

  @IsString()
  @IsOptional()
  breed?: string;

  @IsOptional()
  @IsString()
  isMixBreed?: boolean;

  @IsOptional()
  @IsString()
  age?: string;

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
}
