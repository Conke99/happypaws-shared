import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';
import { ClientProfileResponse } from '../models/ClientProfileResponse';

export class ClientProfileResponseEntity implements ClientProfileResponse {
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

  @IsString()
  @IsOptional()
  @Expose()
  city?: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  country?: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  postalCode?: string | null;

  // client-specific fields
  @IsString()
  @IsOptional()
  @Expose()
  bio!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  emergencyContactName!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  emergencyContactRelationship!: string | null;

  @IsString()
  @IsOptional()
  @Expose()
  emergencyContactPhone!: string | null;

  @IsBoolean()
  @Expose()
  backgroundCheckCompleted!: boolean;

  constructor(partial?: Partial<ClientProfileResponse>) {
    Object.assign(this, partial);
  }
}
