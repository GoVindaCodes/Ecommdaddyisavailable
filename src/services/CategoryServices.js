import requests from "./httpService";

const CategoryServices = {
  getAllCategory: async () => {
    // return requests.get("/category");
    return []
  },

  getAllCategories: async () => {
    // return requests.get("/category/all");
    return [];
  },

  getCategoryById: async (id) => {
    // return requests.get(`/category/${id}`);
    return [];

  },

  addCategory: async (body) => {
    // return requests.post("/category/add", body);
    return [];

  },

  addAllCategory: async (body) => {
    // return requests.post("/category/add/all", body);
    return [];

  },

  updateCategory: async (id, body) => {
    return requests.put(`/category/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/category/status/${id}`, body);
  },

  deleteCategory: async (id, body) => {
    return requests.delete(`/category/${id}`, body);
  },

  updateManyCategory: async (body) => {
    // return requests.patch("/category/update/many", body);
    return [];

  },

  deleteManyCategory: async (body) => {
    // return requests.patch("/category/delete/many", body);
    return [];

  },
};

export default CategoryServices;
