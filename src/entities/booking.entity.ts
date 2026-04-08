import { BookingStatus } from '../constants';
import { ServiceType } from '../Services/services';

export interface Booking {
  id: string;
  clientId: string;
  sitterId: string;
  petIds: string[];
  serviceType: ServiceType;
  startDate: Date;
  endDate: Date;
  duration: string;
  totalPrice: number;
  status: BookingStatus;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}
