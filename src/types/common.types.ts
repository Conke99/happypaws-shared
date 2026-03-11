import type { SitterProfile } from '../entities';

/** Search/filter state for the sitter discovery page */
export interface SearchFiltersType {
  serviceType: string;
  location: string;
  startDate: Date | string | null;
  startTime: string;
  endDate: Date | string | null;
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
export type SortOption = 'rating' | 'price_low' | 'price_high' | 'review_count' | 'distance';

/**
 * Sitter card data for search results.
 * Picks shared fields directly from SitterProfile; adds computed/UI-only fields.
 */
export interface SitterDisplay extends Pick<
  SitterProfile,
  'id' | 'name' | 'rating' | 'reviewCount' | 'location' | 'photoUrl'
> {
  /** Nested lat/lng derived from SitterProfile.lat / SitterProfile.lng */
  coordinates: { lat: number; lng: number };
  /** Representative price derived from the sitter's service list */
  price: number;
  /** Short excerpt from the sitter's most recent review */
  reviewSnippet: string;
  /** Enabled service names derived from SitterProfile.services */
  services: string[];
  /** Derived from SitterProfile.home.type === 'house' */
  hasHouse: boolean;
  /** Derived from SitterProfile.home.type === 'apartment' */
  hasApartment: boolean;
  /** Derived from SitterProfile.home.hasFencedYard */
  hasFencedYard: boolean;
  allowsDogsOnFurniture: boolean;
}

/**
 * Full sitter profile data for the public profile page.
 * Extends SitterDisplay and picks additional fields from SitterProfile;
 * uses simplified/UI-friendly shapes for home, pets, services, and reviews.
 */
export interface SitterProfileDisplay
  extends
    SitterDisplay,
    Pick<
      SitterProfile,
      'verified' | 'responseTime' | 'bio' | 'photoGallery' | 'availability' | 'questionsForOwners'
    > {
  detailedServices: ServiceSummary[];
  acceptedPets: {
    dogSizes: string[];
    cats: boolean;
    dogAges: string;
    catAges: string;
  };
  /** Simplified home view (subset of SitterHome with UI-friendly field names) */
  home: {
    type: string;
    hasFencedYard: boolean;
    hasKids: boolean;
    allowsPetsOnFurniture: boolean;
  };
  reviews: ReviewDisplay[];
  cancellationPolicy: {
    type: string;
    description: string;
  };
}

/**
 * Minimal review data needed for display in the UI.
 * Omits entity-only fields (bookingId, reviewerId, sitterId, etc.) that are
 * irrelevant to rendering. date accepts both Date objects and pre-formatted strings.
 */
export interface ReviewDisplay {
  id: string;
  reviewerName: string;
  reviewerPhotoUrl: string | null;
  rating: number;
  text: string;
  date: Date | string;
}
