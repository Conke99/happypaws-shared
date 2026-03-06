import type { UserRole } from '../../constants';

export interface RegisterResponse {
  id: string;
  email: string;
  accessToken: string;
  role: UserRole;
}
