export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

// TODO: Create entity & DTO for this
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
