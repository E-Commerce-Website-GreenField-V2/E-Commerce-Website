import "./ItemCard.css";
import { useContext, useState } from "react";
import  {Link} from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { WishItemsContext } from "../../../Context/WishItemsContext";
import axios from "axios";

const ItemCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);
  //props.id = category .id

  // const getProduct

  const handleAddToWishList = () => {
    wishItemsContext.addItem(product);
    // console.log(product);
  };

  const handleAddToCart = () => {
    cartItemsContext.addItem(product, 1);
    // console.log(props.item);
  };

  return (
    <div className="product__card__card">
    <div className="product__card">
      <Link to={`/ProductDetails`} className="product__image-link">
        <div
          className="product__image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {product.image && product.image.length > 0 && (
            <img src={product.image} alt="item" className="product__img" />
          )}
        </div>
      </Link>
      <div className="product__card__detail">
        <div className="product__name">
          <Link to={`/ProductDetails`} className="product__name-link">
            {product.name}
          </Link>
        </div>
        <div className="product__description">
          <span>{product.description}</span>
        </div>
        <div className="product__price">
          <span>${product.price}</span>
        </div>
        <div className="product__card__action">
          <IconButton
            onClick={handleAddToWishList}
            sx={{
              borderRadius: "20px",
              width: "40px",
              height: "40px",
            }}
          >
            <FavoriteBorderIcon
              sx={{ width: "22px", height: "22px", color: "black"}}
            />
          </IconButton>
          <IconButton
            onClick={handleAddToCart}
            sx={{
              borderRadius: "20px",
              width: "40px",
              height: "40px",
            }}
          >
            <AddShoppingCartIcon
              sx={{ width: "22px", height: "22px", color: "black" }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ItemCard;
