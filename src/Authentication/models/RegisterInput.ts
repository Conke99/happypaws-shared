import { UserRole } from '../../constants';

export interface RegisterInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: UserRole[];
  activeRole: UserRole;
}
