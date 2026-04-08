import { Booking } from './Booking';

export interface PetSummary {
  id: string;
  petName: string;
  photoUrl: string | null;
}

export interface ClientBookingWithDetails extends Booking {
  sitterFirstName: string;
  sitterLastName: string;
  sitterPhotoUrl: string | null;
  pets: PetSummary[];
}

export interface SitterBookingWithDetails extends Booking {
  clientFirstName: string;
  clientLastName: string;
  clientPhotoUrl: string | null;
  pets: PetSummary[];
}
