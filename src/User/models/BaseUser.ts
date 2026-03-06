export default interface BaseUser {
  id: string;
  accessToken?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
