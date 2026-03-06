import { UserRole } from "../../constants";

export interface LoginInput {
  email: string;
  password: string;
  role: UserRole;
}
