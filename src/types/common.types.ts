import { SitterProfileResponse } from '../Sitter/models/SitterProfileResponse';

/** Search/filter state for the sitter discovery page */
export interface SearchFiltersType {
  serviceType: string;
  location: string;
  startDate: Date | string | null;
  startTime: string;
  endDate: Date | string | null;
  endTime: string;
  selectedPets: string[];
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

/**
 * Sitter card data for search results.
 * Derived from SitterProfileResponse with additional UI-only computed fields.
 */
export interface SitterDisplay extends Pick<
  SitterProfileResponse,
  | 'id'
  | 'firstName'
  | 'lastName'
  | 'photoUrl'
  | 'bio'
  | 'serviceTypes'
  | 'petPreferences'
> {
  price: number;
  reviewSnippet: string;
}

/**
 * Full sitter profile data for the public profile page.
 */
export interface SitterProfileDisplay
  extends
    SitterDisplay,
    Pick<
      SitterProfileResponse,
      | 'verified'
      | 'profilePhotoUrl'
      | 'galleryImages'
      | 'availability'
      | 'pricing'
      | 'workLocations'
      | 'homeEnvironment'
    > {
  detailedServices: ServiceSummary[];
  reviews: ReviewDisplay[];
}

/**
 * Minimal review data needed for display in the UI.
 */
export interface ReviewDisplay {
  id: string;
  reviewerName: string;
  reviewerPhotoUrl: string | null;
  rating: number;
  text: string;
  date: Date | string;
}
