import { Expose } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { UpdateSitterProfileRequest } from '../models/UpdateSitterProfileRequest';

export class UpdateSitterProfileDto implements UpdateSitterProfileRequest {
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
  @IsString()
  @Expose()
  experience?: string | null;

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
  @Expose()
  serviceTypes?: string[];

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

  constructor(partial?: Partial<UpdateSitterProfileRequest>) {
    Object.assign(this, partial);
  }
}
