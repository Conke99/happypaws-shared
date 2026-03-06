import { IsString } from 'class-validator';
import type { LoginInput } from '../models/LoginInput';

export class LoginInputDto implements LoginInput {
  @IsString()
  email!: string;

  @IsString()
  password!: string;

  constructor(partial?: Partial<LoginInput>) {
    Object.assign(this, partial);
  }
}
