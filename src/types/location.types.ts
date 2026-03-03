export interface Location {
  city: string;
  state: string;
  zipCode: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface GeoLocation extends Location {
  coordinates: Coordinates;
}
