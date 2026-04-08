export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  clientId: string;
  sitterId: string;
  petIds: string[];
  serviceType: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  notes: string | null;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}
