export interface UpdateClientProfileRequest {
  // users table
  firstName?: string;
  lastName?: string;
  phone?: string | null;
  photoUrl?: string | null;

  // clients table
  bio?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  emergencyContactName?: string | null;
  emergencyContactRelationship?: string | null;
  emergencyContactPhone?: string | null;
}
