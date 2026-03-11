import { User } from './BaseUser';

export interface ClientProfileResponse extends Omit<User, 'password' | 'roles'> {
  bio: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  emergencyContactName: string | null;
  emergencyContactRelationship: string | null;
  emergencyContactPhone: string | null;
  backgroundCheckCompleted: boolean;
}
