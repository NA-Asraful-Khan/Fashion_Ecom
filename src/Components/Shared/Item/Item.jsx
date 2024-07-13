import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({item}) => {
    const {image,name,new_price,old_price} = item
  return (
    <>
    <div className="item">
        <Link to={`/product/${item.category}/${item.id}`}><img  onClick={window.scrollTo(0,0)} src={image} alt="" /></Link>

        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${new_price}
            </div>
            <div className="itme-price-old">
                ${old_price}
            </div>
        </div>
    </div>
    </>
  )
}
