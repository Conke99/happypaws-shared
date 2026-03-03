export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  [BookingStatus.PENDING]: 'Pending',
  [BookingStatus.CONFIRMED]: 'Confirmed',
  [BookingStatus.IN_PROGRESS]: 'In Progress',
  [BookingStatus.COMPLETED]: 'Completed',
  [BookingStatus.CANCELLED]: 'Cancelled',
};

/** Status from the client's perspective — includes 'upcoming' instead of 'confirmed' */
export enum ClientBookingStatus {
  UPCOMING = 'upcoming',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export const CLIENT_BOOKING_STATUS_LABELS: Record<ClientBookingStatus, string> = {
  [ClientBookingStatus.UPCOMING]: 'Upcoming',
  [ClientBookingStatus.IN_PROGRESS]: 'In Progress',
  [ClientBookingStatus.COMPLETED]: 'Completed',
  [ClientBookingStatus.CANCELLED]: 'Cancelled',
};

export enum TransactionStatus {
  COMPLETED = 'completed',
  PENDING = 'pending',
  PROCESSING = 'processing',
}

export const TRANSACTION_STATUS_LABELS: Record<TransactionStatus, string> = {
  [TransactionStatus.COMPLETED]: 'Completed',
  [TransactionStatus.PENDING]: 'Pending',
  [TransactionStatus.PROCESSING]: 'Processing',
};

export enum CancellationPolicyType {
  FLEXIBLE = 'flexible',
  MODERATE = 'moderate',
  STRICT = 'strict',
}

export const CANCELLATION_POLICY_LABELS: Record<CancellationPolicyType, string> = {
  [CancellationPolicyType.FLEXIBLE]: 'Flexible',
  [CancellationPolicyType.MODERATE]: 'Moderate',
  [CancellationPolicyType.STRICT]: 'Strict',
};
