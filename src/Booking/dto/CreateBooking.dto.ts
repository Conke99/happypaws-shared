import { CreateBookingRequest } from '../models/CreateBookingRequest';

export class CreateBookingDto implements CreateBookingRequest {
  sitterId: string;
  petIds: string[];
  serviceType: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  notes?: string | null;
}
