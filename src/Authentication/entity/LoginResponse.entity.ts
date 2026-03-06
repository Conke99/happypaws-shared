import { IsEnum, IsString } from 'class-validator';
import type { LoginResponse } from '../models/LoginResponse';
import { UserRole } from '../../constants';

export class LoginResponseEntity implements LoginResponse {
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

  @IsEnum(UserRole, { each: true })
  roles!: UserRole[];

  @IsEnum(UserRole)
  activeRole!: UserRole;

  constructor(partial?: Partial<LoginResponse>) {
    Object.assign(this, partial);
  }
}
