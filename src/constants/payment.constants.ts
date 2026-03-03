export enum CardType {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  AMEX = 'amex',
  DISCOVER = 'discover',
}

export const CARD_TYPE_LABELS: Record<CardType, string> = {
  [CardType.VISA]: 'Visa',
  [CardType.MASTERCARD]: 'Mastercard',
  [CardType.AMEX]: 'American Express',
  [CardType.DISCOVER]: 'Discover',
};

export enum HomeType {
  HOUSE = 'house',
  APARTMENT = 'apartment',
  CONDO = 'condo',
  OTHER = 'other',
}

export const HOME_TYPE_LABELS: Record<HomeType, string> = {
  [HomeType.HOUSE]: 'House',
  [HomeType.APARTMENT]: 'Apartment',
  [HomeType.CONDO]: 'Condo',
  [HomeType.OTHER]: 'Other',
};
