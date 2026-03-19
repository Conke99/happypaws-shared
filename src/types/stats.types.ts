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
  totalEarnings: number;
  rating: number;
  reviewCount: number;
  responseRate: number;
}
