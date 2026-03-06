import { IsArray, IsEnum, IsString } from "class-validator";
import { UserRole } from "../../constants";
import type { RegisterInput } from "../models/RegisterInput";

export class RegisterInputDto implements RegisterInput {
  @IsString()
  email!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  password!: string;

  @IsArray()
  @IsEnum(UserRole, { each: true })
  roles!: UserRole[];

  constructor(partial?: Partial<RegisterInput>) {
    Object.assign(this, partial);
  }
}
