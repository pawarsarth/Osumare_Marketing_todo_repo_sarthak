import API from "./axiosInstance";
export const getRoutes = () => API.get("/routes");
export const createRoute = (payload: any) => API.post("/routes", payload);
