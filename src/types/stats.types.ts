export interface ClientStats {
  totalBookings: number;
  rating: number;
  reviewCount: number;
  responseRate: number;
  backgroundCheckCompleted: boolean;
}

export interface SitterStats {
  totalBookings: number;
  completedBookings: number;
  rating: number;
  reviewCount: number;
  responseRate: number;
  totalEarnings: number;
}
