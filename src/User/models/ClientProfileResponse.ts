import { User } from './BaseUser';

export interface ClientProfileResponse extends Omit<
  User,
  'password' | 'roles'
> {
  phone: string | null;
  photoUrl: string | null;
  verified: boolean;
  bio: string | null;
  emergencyContactName: string | null;
  emergencyContactRelationship: string | null;
  emergencyContactPhone: string | null;
  backgroundCheckCompleted: boolean;
}
