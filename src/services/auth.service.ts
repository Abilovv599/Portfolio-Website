import { api } from "@/lib/axios";
import { User } from "@/types/User";

function registerUser(data: Partial<User>) {
  return api.post<User>("/auth/register", data);
}

function loginUser(data: { email: string; password: string }) {
  return api.post<{ access_token: string }>("/auth/login", data);
}

function getUserProfile() {
  return api<User>("/auth/profile");
}

export { registerUser, loginUser, getUserProfile };
