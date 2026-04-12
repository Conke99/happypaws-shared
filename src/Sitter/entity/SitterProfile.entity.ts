import { Expose } from 'class-transformer';
import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { ExperienceLevel } from '../../Experience/experience';
import { ServiceType } from '../../Services/services';
import { SitterProfile } from '../models/SitterProfile';

export class SitterProfileEntity implements SitterProfile {
  @IsString()
  @Expose()
  id!: string;

  @IsString()
  @IsOptional()
  @Expose()
  username!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  bio!: string;

  @IsString()
  @IsOptional()
  @Expose()
  education!: string | null;

  @IsString()
  @IsOptional()
  @IsEnum(ExperienceLevel)
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

  @IsDate()
  @Expose()
  createdAt!: Date;

  @IsDate()
  @Expose()
  updatedAt!: Date;

  constructor(partial?: Partial<SitterProfile>) {
    Object.assign(this, partial);
  }
}
