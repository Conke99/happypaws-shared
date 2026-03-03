export interface UpdateBookingDto {
  /** ISO date string */
  startDate?: string;
  /** ISO date string */
  endDate?: string;
  specialRequests?: string;
  /** BookingStatus value */
  status?: string;
}
