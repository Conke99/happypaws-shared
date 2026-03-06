import { IsEnum, IsString } from 'class-validator';
import type { LoginInput } from '../models/LoginInput';
import { UserRole } from '../..';

export class LoginInputDto implements LoginInput {
  @IsString()
  email!: string;

  @IsString()
  password!: string;

  @IsString()
  @IsEnum(UserRole)
  activeRole!: UserRole;

  constructor(partial?: Partial<LoginInput>) {
    Object.assign(this, partial);
  }
}
