export enum ServiceType {
  BOARDING = 'boarding',
  HOUSE_SITTING = 'house_sitting',
  DROP_IN = 'drop_in',
  DOG_WALKING = 'dog_walking',
}

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  [ServiceType.BOARDING]: 'Boarding in sitter\'s home',
  [ServiceType.HOUSE_SITTING]: 'House sitting',
  [ServiceType.DROP_IN]: 'Drop-in visits',
  [ServiceType.DOG_WALKING]: 'Dog walking',
};

export const SERVICE_TYPE_UNITS: Record<ServiceType, string> = {
  [ServiceType.BOARDING]: 'night',
  [ServiceType.HOUSE_SITTING]: 'night',
  [ServiceType.DROP_IN]: 'visit',
  [ServiceType.DOG_WALKING]: 'walk',
};

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
