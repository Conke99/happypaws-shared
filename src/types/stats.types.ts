import type { SitterProfile } from '../entities';

export interface ClientStats {
  totalBookings: number;
  rating: number;
  reviewCount: number;
  responseRate: number;
  backgroundCheckCompleted: boolean;
}

/**
 * Sitter stats shown on the dashboard/profile.
 * Picks shared fields from SitterProfile; adds computed aggregates not stored on the profile.
 */
export type SitterStats = Pick<SitterProfile, 'rating' | 'reviewCount' | 'responseRate'> & {
  totalBookings: number;
  completedBookings: number;
  totalEarnings: number;
};
