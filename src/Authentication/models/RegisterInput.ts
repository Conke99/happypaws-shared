import type { UserRole } from '../../constants';

export interface RegisterInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: UserRole;
}
