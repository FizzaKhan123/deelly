import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDeals = async () => {
  try {
    const response = await apiClient.get("/deals");
    return response.data;
  } catch (error) {
    console.error("Error fetching deals:", error);
    throw error;
  }
};

export const createDeal = async (data) => {
  try {
    const response = await apiClient.post("/deals", data);
    return response.data;
  } catch (error) {
    console.error("Error creating deal:", error);
    throw error;
  }
};

export const addFavourite = async (dealId, isFavourite) => {
  try {
    const response = await apiClient.patch(`/deals/${dealId}/favourite`, {
      isFavourite,
    });
    return response;
  } catch (error) {
    console.error("Error adding deal to favourites:", error);
    throw error;
  }
};
