import { UserRole } from '../constants';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone?: string | null;
  photoUrl?: string | null;
  role: UserRole;
  memberSince: Date;
  verified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
