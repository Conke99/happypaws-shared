import type { ClientProfile, SitterProfile } from "../entities";

/**
 * Client stats shown on the profile page.
 * All fields exist on ClientProfile — this is a named subset for component props.
 */
export type ClientStats = Pick<
  ClientProfile,
  "totalBookings" | "rating" | "reviewCount" | "responseRate" | "backgroundCheckCompleted"
>;

/**
 * Sitter stats shown on the dashboard/profile.
 * Picks shared fields from SitterProfile; adds computed aggregates not stored on the profile.
 */
export type SitterStats = Pick<SitterProfile, "rating" | "reviewCount" | "responseRate"> & {
  totalBookings: number;
  completedBookings: number;
  totalEarnings: number;
};
