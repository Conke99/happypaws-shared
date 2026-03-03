import { UserRole } from '../../constants';

export interface LoginResponseDto {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    photoUrl: string | null;
  };
}
