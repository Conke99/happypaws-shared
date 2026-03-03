import { ServiceType } from '../constants';

/** Search/filter state for the sitter discovery page */
export interface SearchFilters {
  serviceType: string;
  location: string;
  startDate: string | null;
  startTime: string;
  endDate: string | null;
  endTime: string;
  selectedPets: string[];
  /** [min, max] price range */
  priceRange: [number, number];
  hasHouse: boolean;
  hasApartment: boolean;
  hasFencedYard: boolean;
  allowsDogsOnFurniture: boolean;
}

/** A single service offering shown on the sitter profile public view */
export interface ServiceSummary {
  name: string;
  description: string;
  price: number;
  /** 'night' | 'visit' | 'walk' | 'hour' */
  unit: string;
}

/** Booking preference constraints set by the sitter */
export interface BookingPreferences {
  /** e.g. 'same-day' | '1-day' | '2-days' | '1-week' */
  minNotice: string;
  /** e.g. '1-month' | '3-months' | '6-months' | '1-year' */
  maxAdvance: string;
  /** Minimum stay duration (in days) */
  minStay: string;
  /** Maximum stay duration (in days) */
  maxStay: string;
  autoAccept: boolean;
}

/** Configuration for a single service in sitter's pricing settings */
export interface ServiceConfig {
  enabled: boolean;
  price: number;
  description: string;
}

/** Sitter's full services & pricing configuration */
export interface ServicesPricingData {
  boarding: ServiceConfig;
  houseSitting: ServiceConfig;
  dropIn: ServiceConfig;
  walking: ServiceConfig;
  weekendRate: number;
  holidayRate: number;
  /** Percentage discount for multiple pets */
  multiPetDiscount: number;
}

/** Sort options for sitter search results */
export type SortOption =
  | 'rating'
  | 'price_low'
  | 'price_high'
  | 'review_count'
  | 'distance';
