export const login = {
    adminUsername: "Admin",
    adminPassword: "admin123",
  };
  
export function getRandomUsername() {
    return `TestUser${Math.floor(Math.random() * 1000)}`;
}
  