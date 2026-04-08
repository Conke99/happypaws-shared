import { ServiceType } from '../../Services/services';

export interface CreateBookingRequest {
  sitterId: string;
  petIds: string[];
  serviceType: ServiceType;
  startDate: string;
  endDate: string;
  totalPrice: number;
  notes?: string | null;
}
