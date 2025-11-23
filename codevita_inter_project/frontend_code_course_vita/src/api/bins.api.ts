import API from "./axiosInstance";
export const getBins = () => API.get("/bins");
export const createBin = (data: any) => API.post("/bins", data);
export const updateBin = (id: string, data: any) => API.put(`/bins/${id}`, data);
export const deleteBin = (id: string) => API.delete(`/bins/${id}`);
