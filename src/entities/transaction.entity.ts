import { TransactionStatus } from '../constants';

export interface Transaction {
  id: string;
  bookingId: string;
  sitterId: string;
  clientId: string;
  clientName: string;
  clientInitials: string;
  petName: string;
  serviceType: string;
  duration: string;
  date: string;
  amount: number;
  status: TransactionStatus;
  payoutDate: string;
  createdAt: Date;
}
