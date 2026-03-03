export interface CreateBookingDto {
  sitterId: string;
  petIds: string[];
  /** ServiceType value */
  serviceType: string;
  /** ISO date string */
  startDate: string;
  /** ISO date string */
  endDate: string;
  specialRequests?: string;
}
