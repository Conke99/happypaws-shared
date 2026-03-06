import { IsEnum, IsString } from 'class-validator';
import { UserRole } from '../../constants';
import type { RegisterInput } from '../models/RegisterInput';

export class RegisterInputDto implements RegisterInput {
  @IsString()
  email!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  password!: string;

  @IsString()
  @IsEnum(UserRole)
  role!: UserRole;

  constructor(partial?: Partial<RegisterInput>) {
    Object.assign(this, partial);
  }
}
