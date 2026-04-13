import { IsOptional, IsString } from 'class-validator';
import { UpdateClientProfileRequest } from '../../User/models/UpdateClientProfileRequest';

export class UpdateClientProfileDto implements UpdateClientProfileRequest {
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

  @IsOptional()
  @IsString()
  bio?: string | null;

  @IsOptional()
  @IsString()
  city?: string | null;

  @IsOptional()
  @IsString()
  country?: string | null;

  @IsOptional()
  @IsString()
  postalCode?: string | null;

  @IsOptional()
  @IsString()
  emergencyContactName?: string | null;

  @IsOptional()
  @IsString()
  emergencyContactRelationship?: string | null;

  @IsOptional()
  @IsString()
  emergencyContactPhone?: string | null;

  constructor(partial?: Partial<UpdateClientProfileRequest>) {
    Object.assign(this, partial);
  }
}
