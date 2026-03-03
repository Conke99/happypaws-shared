export interface RegisterSitterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;
  bio?: string;
  experience?: string;
}
