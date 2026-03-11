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

export class PetProfileEntity implements PetProfile {
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
  breed?: string | null;

  @IsOptional()
  @IsBoolean()
  isMixBreed?: boolean;

  @IsOptional()
  @IsString()
  age?: string | null;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender | null;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsString()
  photoUrl?: string | null;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photoGallery?: string[];

  @IsOptional()
  @IsEnum(AgeType)
  ageType?: AgeType;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  houseTrained?: CommonAnswersPets | null;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  friendlyWithChildren?: CommonAnswersPets | null;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  friendlyWithDogs?: CommonAnswersPets | null;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  friendlyWithCats?: CommonAnswersPets | null;

  @IsOptional()
  @IsEnum(EnergyLevel)
  energyLevel?: EnergyLevel | null;

  @IsOptional()
  @IsString()
  canBeLeftAlone?: string | null;

  @IsOptional()
  @IsString()
  additionalInfo?: string | null;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  litterTrained?: CommonAnswersPets | null;

  @IsOptional()
  @IsEnum(IndoorOutdoor)
  indoorOutdoor?: IndoorOutdoor | null;

  @IsOptional()
  @IsEnum(CommonAnswersPets)
  declawed?: CommonAnswersPets | null;

  @IsOptional()
  @IsString()
  petSpecies?: string | null;

  @IsOptional()
  @IsString()
  habitatType?: string | null;

  @IsOptional()
  @IsEnum(CanBeHandled)
  canBeHandled?: CanBeHandled | null;

  @IsOptional()
  @IsString()
  specialCare?: string | null;

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
