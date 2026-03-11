export default interface BaseUserResponse {
  id: string;
  accessToken?: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}
