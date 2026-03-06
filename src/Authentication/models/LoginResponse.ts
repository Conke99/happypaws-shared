import { UserRole } from '../../constants';

export interface LoginResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  roles: UserRole[];
  activeRole: UserRole;
}
