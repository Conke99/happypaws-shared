import { ExperienceLevel } from '../../Experience/experience';
import { ServiceType } from '../../Services/services';

export interface SitterProfile {
  id: string;
  username: string | null;
  bio: string | null;
  education: string | null;
  experience: ExperienceLevel | null;
  profilePhotoUrl: string | null;
  galleryImages: string[];
  verification: string | null;
  serviceTypes: ServiceType[];
  workLocations: string[];
  petPreferences: string[];
  homeEnvironment: string[];
  createdAt: Date;
  updatedAt: Date;
}
