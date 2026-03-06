import { IsEmail, IsEnum, IsString } from 'class-validator';
import type { LoginInput } from '../models/LoginInput';
import { UserRole } from '../../constants';

export class LoginInputDto implements LoginInput {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsEnum(UserRole)
  activeRole!: UserRole;

  constructor(partial?: Partial<LoginInput>) {
    Object.assign(this, partial);
  }
}
