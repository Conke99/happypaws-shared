import { UserRole } from '../../constants';

export interface LoginInput {
  email: string;
  password: string;
  activeRole: UserRole;
}
