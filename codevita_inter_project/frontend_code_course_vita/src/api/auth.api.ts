import API from "./axiosInstance";
export const loginUser = (payload: { email: string; password: string }) =>
  API.post("/auth/login", payload);
export const signupUser = (payload: any) => API.post("/auth/signup", payload);
