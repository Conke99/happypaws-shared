export interface PayoutAccount {
  id: string;
  sitterId: string;
  holderName: string;
  bankName: string;
  accountLast4: string;
  routingLast4: string;
  /** 'checking' | 'savings' */
  type: string;
  autoPayout: boolean;
  /** Minimum balance threshold before automatic payout, e.g. '$50' */
  threshold: string;
  taxVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
