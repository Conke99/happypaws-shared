import { User } from '../../entities';
import { SitterProfile } from './SitterProfile';

export interface SitterProfileResponse
  extends
    Omit<User, 'password' | 'roles' | 'phone' | 'photoUrl' | 'verified'>,
    Omit<SitterProfile, 'id' | 'createdAt' | 'updatedAt'> {
  // narrowing optionals from User
  phone: string | null;
  photoUrl: string | null;
  verified: boolean;

  availability: SitterAvailability[];
  pricing: SitterPricing[];
}

export interface SitterAvailability {
  id: string;
  date: string;
  isAvailable: boolean;
}

export interface SitterPricing {
  id: string;
  service: string;
  priceMin: number;
  priceMax: number;
}
