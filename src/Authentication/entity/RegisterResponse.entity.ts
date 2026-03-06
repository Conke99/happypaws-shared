import { IsEnum, IsString } from 'class-validator';
import type { RegisterResponse } from '../models/RegisterResponse';
import { UserRole } from '../../constants';

export class RegisterResponseEntity implements RegisterResponse {
  @IsString()
  id!: string;

  @IsString()
  email!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  accessToken!: string;

  @IsString()
  @IsEnum(UserRole)
  role!: UserRole;

  constructor(partial?: Partial<RegisterResponse>) {
    Object.assign(this, partial);
  }
}
