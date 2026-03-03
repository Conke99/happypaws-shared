export interface ClientProfile {
  id: string;
  userId: string;
  city: string;
  state: string;
  zipCode: string;
  totalBookings: number;
  rating: number;
  reviewCount: number;
  responseRate: number;
  backgroundCheckCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
