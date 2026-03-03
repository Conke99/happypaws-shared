export interface BookingResponseDto {
  id: string;
  clientId: string;
  clientName: string;
  sitterId: string;
  sitterName: string;
  sitterPhoto: string | null;
  sitterRating: number;
  petIds: string[];
  petNames: string[];
  serviceType: string;
  startDate: string;
  endDate: string;
  duration: string;
  totalPrice: number;
  status: string;
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}
