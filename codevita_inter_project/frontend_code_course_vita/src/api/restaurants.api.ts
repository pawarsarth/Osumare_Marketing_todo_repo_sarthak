import API from "./axiosInstance";
export const getRestaurants = () => API.get("/restaurants");
export const createRestaurant = (data: any) => API.post("/restaurants", data);
export const getRestaurant = (id: string) => API.get(`/restaurants/${id}`);
