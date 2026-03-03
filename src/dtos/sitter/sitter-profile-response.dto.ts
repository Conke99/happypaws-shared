export interface SitterServiceDto {
  type: string;
  name: string;
  price: number;
  unit: string;
  description: string;
}

export interface SitterProfileResponseDto {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  photoUrl: string | null;
  photoGallery: string[];
  bio: string;
  experience: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  responseTime: string;
  responseRate: number;
  verified: boolean;
  backgroundCheckCompleted: boolean;
  city: string;
  state: string;
  zipCode: string;
  lat: number;
  lng: number;
  services: SitterServiceDto[];
  home: {
    type: string;
    hasFencedYard: boolean;
    hasKids: boolean;
    allowsPetsOnFurniture: boolean;
  };
  petPreferences: {
    dogSizes: string[];
    cats: boolean;
  };
  /** Map of 'YYYY-MM-DD' → available */
  availability: Record<string, boolean>;
  cancellationPolicy: {
    type: string;
    description: string;
  };
  questionsForOwners: string[];
}
