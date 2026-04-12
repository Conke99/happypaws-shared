import { ExperienceLevel } from '../../Experience/experience';
import { ServiceType } from '../../Services/services';

export interface UpdateSitterProfileRequest {
  // user fields
  firstName?: string;
  lastName?: string;
  phone?: string | null;
  photoUrl?: string | null;
  lat?: number | null;
  lng?: number | null;

  // sitter fields
  username?: string | null;
  bio?: string | null;
  education?: string | null;
  experience?: ExperienceLevel | null;
  profilePhotoUrl?: string | null;
  galleryImages?: string[];
  verification?: string | null;
  serviceTypes?: ServiceType[];
  workLocations?: string[];
  petPreferences?: string[];
  homeEnvironment?: string[];
}
