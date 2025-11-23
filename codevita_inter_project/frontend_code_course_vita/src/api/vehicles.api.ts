import API from "./axiosInstance";
export const getVehicles = () => API.get("/vehicles");
export const createVehicle = (payload: any) => API.post("/vehicles", payload);
