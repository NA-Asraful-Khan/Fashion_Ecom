import './Item.css'

export const Item = ({item}) => {
    const {image,name,new_price,old_price} = item
  return (
    <>
    <div className="item">
        <img src={image} alt="" />
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
