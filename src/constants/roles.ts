export const ROLES = {
    GUEST: "guest",
    USER: "user",
    VENDOR: "vendor",
    ADMIN: "admin",
  } as const;
  
  export type RoleType = typeof ROLES[keyof typeof ROLES];
  