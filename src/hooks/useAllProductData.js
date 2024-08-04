import axios from "axios";
import { useQuery } from "react-query";

const fetchAllProduct = () => {
  return axios.get("http://localhost:4000/api/products/allproducts");
};

export const useAllProductData = () => {
  return useQuery("all-product", fetchAllProduct, {
    refetchOnWindowFocus: true,
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
  });
};
