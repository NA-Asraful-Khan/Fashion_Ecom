import { useContext } from 'react'
import './CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from'../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Shared/Item/Item'


export const ShopCatagory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {
          all_product.map((item,i)=>{
            if(props.category === item.category){
              return <Item key={i} item={item}/>
            }else{
              return null;
            }
          })
        }
      </div>

      <div className="shopCategory-loadmor">
        Explore More
      </div>
    </div>
  )
}
