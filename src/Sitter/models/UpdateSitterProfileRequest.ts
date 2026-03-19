export interface UpdateSitterProfileRequest {
  // user fields
  firstName?: string;
  lastName?: string;
  phone?: string | null;
  photoUrl?: string | null;

  // sitter fields
  username?: string | null;
  bio?: string | null;
  education?: string | null;
  experience?: string | null;
  profilePhotoUrl?: string | null;
  galleryImages?: string[];
  verification?: string | null;
  serviceTypes?: string[];
  workLocations?: string[];
  petPreferences?: string[];
  homeEnvironment?: string[];
}
