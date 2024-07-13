import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";

export default function CartItems() {
  const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
    const shippingFee = 'Free'
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                
                <Link  to={`/product/${product.id}`}><img src={product.image} alt="" className="carticon-product-icon" /></Link>
                <Link  to={`/product/${product.id}`}><p>{product.name}</p></Link>
                <p>${product.new_price}</p>
                <h3>x <button className="cartitems-quantity">{cartItems[product.id]}</button></h3>
                <p>${product.new_price*cartItems[product.id]}</p>
                <img className="carticon-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitmes-total-items">
                    <p>Subtitle</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitmes-total-items">
                    <p>Shipping Fee</p>
                    <p>{shippingFee !== 'Free' && '$'}{shippingFee}</p>
                </div>
                <hr />
                <div className="cartitmes-total-items">
                    <h3>Total</h3>
                    <h3>${shippingFee === 'Free'?getTotalCartAmount():getTotalCartAmount()+Number(shippingFee)}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here!</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}
