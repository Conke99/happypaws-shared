import type { UserRole } from '../../constants';

export interface RegisterResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  role: UserRole;
}
