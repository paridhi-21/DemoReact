export type Role = "guest" | "user" | "vendor" | "admin";

export interface AuthState {
  isAuthenticated: boolean;
  role: Role;
  userName?: string;
}
