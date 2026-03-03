export interface Review {
  id: string;
  bookingId: string;
  /** The user who wrote the review */
  reviewerId: string;
  reviewerName: string;
  reviewerPhotoUrl: string | null;
  /** The sitter being reviewed */
  sitterId: string;
  sitterName: string;
  sitterPhotoUrl: string | null;
  rating: number;
  text: string;
  date: Date;
  createdAt: Date;
}
