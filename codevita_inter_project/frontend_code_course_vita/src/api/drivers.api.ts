import API from "./axiosInstance";
export const getDrivers = () => API.get("/drivers");
export const createDriver = (payload: any) => API.post("/drivers", payload);
