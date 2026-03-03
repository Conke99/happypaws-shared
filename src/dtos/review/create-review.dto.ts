export interface CreateReviewDto {
  bookingId: string;
  /** 1–5 */
  rating: number;
  text: string;
}
