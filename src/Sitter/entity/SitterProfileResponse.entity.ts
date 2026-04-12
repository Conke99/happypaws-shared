import { Expose } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { ExperienceLevel } from '../../Experience/experience';
import { ServiceType } from '../../Services/services';
import {
  SitterAvailability,
  SitterPricing,
  SitterProfileResponse,
} from '../models/SitterProfileResponse';

export class SitterProfileResponseEntity implements SitterProfileResponse {
  // From users table
  @IsString()
  @Expose()
  id!: string;

  @IsEmail()
  @Expose()
  email!: string;

  @IsString()
  @Expose()
  firstName!: string;

  @IsString()
  @Expose()
  lastName!: string;

  @IsString()
  @IsOptional()
  @Expose()
  phone!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  photoUrl!: string | null;

  @IsDate()
  @Expose()
  memberSince!: Date;

  @IsBoolean()
  @Expose()
  verified!: boolean;

  @IsDate()
  @Expose()
  createdAt!: Date;

  @IsDate()
  @Expose()
  updatedAt!: Date;

  // From sitters table
  @IsString()
  @IsOptional()
  @Expose()
  username!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  bio!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  education!: string | null;

  @IsEnum(ExperienceLevel)
  @IsOptional()
  @Expose()
  experience!: ExperienceLevel | null;

  @IsString()
  @IsOptional()
  @Expose()
  profilePhotoUrl!: string | null;

  @IsArray()
  @Expose()
  galleryImages!: string[];

  @IsString()
  @IsOptional()
  @Expose()
  verification!: string | null;

  @IsArray()
  @Expose()
  @IsEnum(ServiceType, { each: true })
  serviceTypes!: ServiceType[];

  @IsArray()
  @Expose()
  workLocations!: string[];

  @IsArray()
  @Expose()
  petPreferences!: string[];

  @IsArray()
  @Expose()
  homeEnvironment!: string[];

  // From related tables
  @IsArray()
  @Expose()
  availability!: SitterAvailability[];

  @IsArray()
  @Expose()
  pricing!: SitterPricing[];

  constructor(partial?: Partial<SitterProfileResponse>) {
    Object.assign(this, partial);
  }
}
