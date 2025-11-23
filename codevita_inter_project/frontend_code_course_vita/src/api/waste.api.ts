import API from "./axiosInstance";
export const listWaste = () => API.get("/waste");
export const scheduleWaste = (payload: any) => API.post("/waste/schedule", payload);
export const recordWaste = (payload: any) => API.post("/waste", payload);
export const completeWaste = (id: string, payload: any) => API.post(`/waste/${id}/complete`, payload);
