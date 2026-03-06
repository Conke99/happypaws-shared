import { IsEnum, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { UserRole } from '../../constants';
import type BaseUser from '../models/BaseUser';

export class BaseUserEntity implements BaseUser {
  @IsString()
  @Expose()
  accessToken!: string;

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

  @IsString()
  @Expose()
  @IsEnum(UserRole)
  role!: UserRole;

  constructor(partial?: Partial<BaseUser>) {
    Object.assign(this, partial);
  }
}
