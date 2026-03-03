export interface SearchSitterDto {
  serviceType?: string;
  location?: string;
  /** ISO date string */
  startDate?: string;
  startTime?: string;
  /** ISO date string */
  endDate?: string;
  endTime?: string;
  petIds?: string[];
  minPrice?: number;
  maxPrice?: number;
  hasHouse?: boolean;
  hasApartment?: boolean;
  hasFencedYard?: boolean;
  allowsDogsOnFurniture?: boolean;
  sortBy?: string;
  page?: number;
  limit?: number;
}
