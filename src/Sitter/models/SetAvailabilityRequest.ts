export interface SetAvailabilityRequest {
  dates: {
    date: string; // "YYYY-MM-DD"
    isAvailable: boolean;
  }[];
}
