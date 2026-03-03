export interface EmergencyContact {
  id: string;
  clientId: string;
  name: string;
  /** 'Family' | 'Friend' | 'Neighbor' | 'Veterinarian' | 'Other' */
  relationship: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
