import productData from "utils/products";
import requests from "./httpService";

const ProductServices = {
  getAllProducts: async (
    // {page, limit, category, title, price }
  ) => {
    // const searchCategory = category !== null ? category : "";
    // const searchTitle = title !== null ? title : "";
    // const searchPrice = price !== null ? price : "";

    // return requests.get(
    //   `/products?page=${page}&limit=${limit}&category=${searchCategory}&title=${searchTitle}&price=${searchPrice}`
    // );
    return (
      { products: [{ _id: 1, title: { en: "Samsung" }, prices: { price: 120, discount: 10, originalPrice: 108 }, stock: 10, description: 'description', tag: 'none', category: { name: 'Phones' }, image: ['none'], status: 'none' }] }
    );
  },

  getProductById: async (id) => {
    // return requests.post(`/products/${id}`);  return (
    return ({ _id: 1, title: { en: "Samsung" }, prices: { price: 120, discount: 10, originalPrice: 108 }, stock: 10, description: 'description', tag: 'none', category: { name: 'Phones' }, image: ['none'], status: 'none' }
    );
  },
  // addProduct: async (body) => {
  //   return requests.post("/products/add", body);
  // },
  addProduct: async (body) => {
    try {
      console.log("Adding product:", body); // Log the product details before addition

      // Simulate a delay to mimic asynchronous behavior
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Assuming productData is an array of products, you can push the new product to it
      productData.push(body);

      return { success: true, message: "Product added successfully" };
    } catch (error) {
      return { success: false, message: "Failed to add product" };
    }
  },

  deleteProduct: async (id) => {
    try {
      console.log("Deleting product with ID:", id); // Log the ID before deletion

      // Simulate a delay to mimic asynchronous behavior
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Filter out the product with the specified ID
      const updatedProducts = productData.filter(product => product._id !== id);

      // Update the productData with the filtered products
      // Assuming productData is an array of products, you can replace it entirely with updatedProducts
      productData.length = 0; // Clear the existing data
      updatedProducts.forEach(product => productData.push(product)); // Push the updated products

      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      return { success: false, message: "Failed to delete product" };
    }
  },
  addAllProducts: async (body) => {
    return requests.post("/products/all", body);
  },
  updateProduct: async (id, body) => {
    return requests.patch(`/products/${id}`, body);
  },
  updateManyProducts: async (body) => {
    return requests.patch("products/update/many", body);
  },
  updateStatus: async (id, body) => {
    return requests.put(`/products/status/${id}`, body);
  },

  // for now commeneted uncomment for backend integration

  // deleteProduct: async (id) => {
  //   return requests.delete(`/products/${id}`);
  // },
  deleteProduct: async (id) => {
    try {
      console.log("Deleting product with ID:", id); // Log the ID before deletion

      // Simulate a delay to mimic asynchronous behavior
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Filter out the product with the specified ID
      const updatedProducts = productData.filter(product => product._id !== id);

      // Update the productData with the filtered products
      // Assuming productData is an array of products, you can replace it entirely with updatedProducts
      productData.length = 0; // Clear the existing data
      updatedProducts.forEach(product => productData.push(product)); // Push the updated products

      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      return { success: false, message: "Failed to delete product" };
    }
  },

  // for now commeneted uncomment for backend integration

  // deleteManyProducts: async (body) => {
  //   return requests.patch("/products/delete/many", body);
  // },
  deleteManyProducts: async (body) => {
    console.log("Request Body:", body); // Log the body to see its content
    const { ids } = body;

    try {
      // Simulate a delay to mimic asynchronous behavior
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Filter out the products with the provided ids
      const updatedProducts = productData.filter(product => !ids.includes(product._id));

      // Update the productData with the filtered products
      // Assuming productData is an array of products, you can replace it entirely with updatedProducts
      productData.length = 0; // Clear the existing data
      updatedProducts.forEach(product => productData.push(product)); // Push the updated products

      return { success: true, message: "Products deleted successfully", data: updatedProducts };
    } catch (error) {
      return { success: false, message: "Failed to delete products" };
    }
  }
};

export default ProductServices;
