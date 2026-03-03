export enum UserRole {
  CLIENT = 'client',
  SITTER = 'sitter',
}

export const USER_ROLE_LABELS: Record<UserRole, string> = {
  [UserRole.CLIENT]: 'Client',
  [UserRole.SITTER]: 'Sitter',
};
