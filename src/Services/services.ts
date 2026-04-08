export enum ServiceType {
  PET_SITTING = 'pet-sitting',
  PET_WALKING = 'pet-walking',
  PET_TRAINING = 'pet-training',
  PET_DAYCARE = 'pet-daycare',
  OTHER_SERVICE = 'other-service',
}

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  [ServiceType.PET_SITTING]: 'Pet Sitting',
  [ServiceType.PET_WALKING]: 'Pet Walking',
  [ServiceType.PET_TRAINING]: 'Pet Training',
  [ServiceType.PET_DAYCARE]: 'Pet Daycare',
  [ServiceType.OTHER_SERVICE]: 'Other',
};

export const SERVICE_TYPE_UNITS: Record<ServiceType, string> = {
  [ServiceType.PET_SITTING]: 'night',
  [ServiceType.PET_WALKING]: 'walk',
  [ServiceType.PET_TRAINING]: 'session',
  [ServiceType.PET_DAYCARE]: 'day',
  [ServiceType.OTHER_SERVICE]: 'session',
};
