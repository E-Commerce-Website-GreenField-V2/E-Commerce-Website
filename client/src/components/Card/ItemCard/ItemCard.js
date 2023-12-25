import "./ItemCard.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { WishItemsContext } from "../../../Context/WishItemsContext";
import { CartItemsContext } from "../../../Context/CartItemsContext";

const ItemCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);
  //props.id = category .id
  const navigate = useNavigate();
  console.log("product", product);

  // const getProduct

  const handleAddToWishList = () => {
    wishItemsContext.addItem(product);
    // console.log(product);
  };

  const handleAddToCart = () => {
    cartItemsContext.addItem(product, 1);
    // console.log(props.item);
  };

  const handleNavigate = () => {
    navigate(`/singleProduct/${product.id}`);
  };

  console.log(product);

  return (
    <div className="product__card__card">
      <div className="product__card">
        <div
          className="product__image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleNavigate}
        >
          {product.image && product.image.length > 0 && (
            <img
              src={product.image.slice(1, product.image.length - 1)}
              alt="item"
              className="product__img"
            />
          )}
        </div>
        <div className="product__card__detail">
          <div className="product__name">
            {/* <Link to={`/singleProduct`}> // link to one product component
              {product.name}
            </Link> */}
          </div>
          <div className="product__description">
            <span>{product.name}</span>
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
                height:
                  "40px" /* borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */,
              }}
            >
              <FavoriteBorderIcon
                sx={{ width: "22px", height: "22px", color: "black" }}
              />
            </IconButton>
            <IconButton
              onClick={handleAddToCart}
              sx={{
                borderRadius: "20px",
                width: "40px",
                height:
                  "40px" /*  borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */,
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
