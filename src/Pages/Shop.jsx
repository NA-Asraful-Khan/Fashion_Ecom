import { Hero } from "../Components/Shop_Page/Hero/Hero"
import { Offers } from "../Components/Shop_Page/Offers/Offers"
import {Section} from "../Components/Section/Section"
import data_product from '../Components/Assets/data'
import new_collection from '../Components/Assets/new_collections'
import { NewsLetter } from "../Components/Shop_Page/NewsLetter/NewsLetter"


export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Section title="POPULAR IN WOMEN" data={data_product}/>
      <Offers/>
      <Section title="NEW COLLECTIONS" data={new_collection}/>
      <NewsLetter/>
    </div>
  )
}
