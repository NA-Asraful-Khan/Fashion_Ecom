import { Hero } from "../Components/Shop_Page/Hero/Hero";
import { Offers } from "../Components/Shop_Page/Offers/Offers";
import { Section } from "../Components/Section/Section";
// import data_product from "../Components/Assets/data";
// import new_collection from "../Components/Assets/new_collections";
import { NewsLetter } from "../Components/Shop_Page/NewsLetter/NewsLetter";
import axios from "axios";
import { useQuery } from "react-query";
import { apiUrl } from "../config/config";

const fetchNewCollection = async () => {
  const { data } = await axios.get(`${apiUrl}/api/products/newCollection`);
  return data;
};
const fetchPopularWomenCollection = async () => {
  const { data } = await axios.get(`${apiUrl}/api/products/popularinwomen`);
  return data;
};
export const Shop = () => {
  const { data: new_collection } = useQuery(
    "new_Collection",
    fetchNewCollection
  );
  const { data: popular_women_collection } = useQuery(
    "popular_women_collection",
    fetchPopularWomenCollection
  );
  return (
    <div>
      <Hero />
      <Section title="POPULAR IN WOMEN" data={popular_women_collection} />
      <Offers />
      <Section title="NEW COLLECTIONS" data={new_collection} />
      <NewsLetter />
    </div>
  );
};
