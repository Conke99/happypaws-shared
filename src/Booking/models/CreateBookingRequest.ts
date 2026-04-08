export interface CreateBookingRequest {
  sitterId: string;
  petIds: string[];
  serviceType: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  notes?: string | null;
}
