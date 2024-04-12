import coupons from 'utils/coupons';
import requests from './httpService';

const CouponServices = {
  // addCoupon: async (body) => {
  //   // return requests.post('/coupon/add', body);
  //   return [];

  // },
  addProduct: async (body) => {
    try {
      console.log("Adding coupons:", body); // Log the product details before addition

      // Simulate a delay to mimic asynchronous behavior
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Assuming productData is an array of products, you can push the new product to it
      coupons.push(body);

      return { success: true, message: "Product added successfully" };
    } catch (error) {
      return { success: false, message: "Failed to add product" };
    }
  },

  addAllCoupon: async (body) => {
    // return requests.post('/coupon/add/all', body);
    return [];

  },
  getAllCoupons: async () => {
    // return requests.get('/coupon');
    return [];

  },
  getCouponById: async (id) => {
    // return requests.get(`/coupon/${id}`);
    return [];

  },
  updateCoupon: async (id, body) => {
    // return requests.put(`/coupon/${id}`, body);
    return [];

  },
  updateManyCoupons: async (body) => {
    return requests.patch('/coupon/update/many', body);
  },
  updateStatus: async (id, body) => {
    return requests.put(`/coupon/status/${id}`, body);
  },
  deleteCoupon: async (id) => {
    return requests.delete(`/coupon/${id}`);
  },
  deleteManyCoupons: async (body) => {
    return requests.patch(`/coupon/delete/many`);
  },
};

export default CouponServices;
