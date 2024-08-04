import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent the default button behavior
    addToCart(product.id);
    console.log(`Product ${product.id} added to cart.`);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="prodductdisplay-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button type="button" onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <p className="productdisplay-right-category">
            <span>Category :</span>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
            ,{product.tags.join(",")}
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span>
            {product.tags.join(",")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
