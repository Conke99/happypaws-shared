export interface UpdateClientProfileRequest {
  // users table
  firstName?: string;
  lastName?: string;
  phone?: string | null;
  photoUrl?: string | null;

  // clients table
  bio?: string | null;
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  emergencyContactName?: string | null;
  emergencyContactRelationship?: string | null;
  emergencyContactPhone?: string | null;
}
