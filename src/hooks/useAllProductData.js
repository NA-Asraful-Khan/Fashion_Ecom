import axios from "axios";
import { useQuery } from "react-query";
import { apiUrl } from "../config/config";

const fetchAllProduct = () => {
  return axios.get(`${apiUrl}/api/products/allproducts`);
};

export const useAllProductData = () => {
  return useQuery("all-product", fetchAllProduct, {
    refetchOnWindowFocus: true,
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
  });
};
