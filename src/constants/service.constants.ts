export enum ActivityType {
  BOOKING = 'booking',
  REVIEW = 'review',
  PROFILE_VIEW = 'profile_view',
  OTHER = 'other',
}

export const ACTIVITY_TYPE_LABELS: Record<ActivityType, string> = {
  [ActivityType.BOOKING]: 'Booking',
  [ActivityType.REVIEW]: 'Review',
  [ActivityType.PROFILE_VIEW]: 'Profile View',
  [ActivityType.OTHER]: 'Other',
};
