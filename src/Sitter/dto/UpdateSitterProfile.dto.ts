import { Expose } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ExperienceLevel } from '../../Experience/experience';
import { ServiceType } from '../../Services/services';
import { UpdateSitterProfileRequest } from '../models/UpdateSitterProfileRequest';

export class UpdateSitterProfileDto implements UpdateSitterProfileRequest {
  // user fields

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  phone?: string | null;

  @IsOptional()
  @IsString()
  photoUrl?: string | null;

  // sitter fields

  @IsOptional()
  @IsString()
  @Expose()
  username?: string | null;

  @IsOptional()
  @IsString()
  @Expose()
  bio?: string | null;

  @IsOptional()
  @IsString()
  @Expose()
  education?: string | null;

  @IsOptional()
  @IsEnum(ExperienceLevel)
  @Expose()
  experience?: ExperienceLevel | null;

  @IsOptional()
  @IsString()
  @Expose()
  profilePhotoUrl?: string | null;

  @IsOptional()
  @IsArray()
  @Expose()
  galleryImages?: string[];

  @IsOptional()
  @IsString()
  @Expose()
  verification?: string | null;

  @IsOptional()
  @IsArray()
  @IsEnum(ServiceType, { each: true })
  @Expose()
  serviceTypes?: ServiceType[];

  @IsOptional()
  @IsArray()
  @Expose()
  workLocations?: string[];

  @IsOptional()
  @IsArray()
  @Expose()
  petPreferences?: string[];

  @IsOptional()
  @IsArray()
  @Expose()
  homeEnvironment?: string[];

  @IsOptional()
  @IsNumber()
  lat?: number | null;

  @IsOptional()
  @IsNumber()
  lng?: number | null;

  constructor(partial?: Partial<UpdateSitterProfileRequest>) {
    Object.assign(this, partial);
  }
}
