import { Expose } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRole } from '../../constants';
import type BaseUserResponse from '../models/BaseUserResponse';

export class BaseUserEntity implements Omit<BaseUserResponse, 'accessToken'> {
  @IsString()
  @Expose()
  id!: string;

  @IsString()
  @Expose()
  firstName!: string;

  @IsString()
  @Expose()
  lastName!: string;

  @IsString()
  @Expose()
  email!: string;

  @IsArray()
  @IsEnum(UserRole, { each: true })
  @Expose()
  roles!: UserRole[];

  @IsOptional()
  @Expose()
  lat?: number | null;

  @IsOptional()
  @Expose()
  lng?: number | null;

  constructor(partial?: Partial<BaseUserResponse>) {
    Object.assign(this, partial);
  }
}
