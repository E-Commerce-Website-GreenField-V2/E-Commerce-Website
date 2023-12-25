import { useContext,useEffect, useState } from "react";
import { Button } from "@mui/material";
import "../../style/ProductDetails.css";
import { IconButton } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { CartItemsContext } from "../../Context/CartItemsContext";
import { WishItemsContext } from "../../Context/WishItemsContext.js";



const ProductDetailsPage = () => {
  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [id,setId]=useState(1)
  const handleAddToWishList = () => {
    wishItemsContext.addItem(product);
    // console.log(product);
  };
  const hanleAddToCart = () => {
    cartItemsContext.addItem(product, 1);
    // console.log(props.item);
  };
  useEffect(() => {
    const fetchProductDetails = async (ProductId) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/products/${ProductId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setProduct(responseData);
        setId(1);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProductDetails(id);
  }, [id]);


  if (!product) {
    return <div>Loading...</div>; 
  }
  const formattedPrice = product.price !== undefined && typeof product.price === "number"
  ? `$${product.price.toFixed(2)}`
  : "Invalid Price";

  return (
    <div className="product-details-page">
     
      <div className="havic-hv-g-92">{product.name}</div>
      <div className="div">{formattedPrice}</div>
      <div className="frame-group">
        <img className="product-image" src={product.image} alt={`Product`} />
   </div>
      <div className="playstation-5-controller">{product.description}</div>
     
      <div className="quantity-selector">
        <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
        <div className="quantity">{quantity}</div>
        
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </div>
      <div>
      <label className="size">Size:</label>
      <button className="xs">XS</button>
      <button className="xs">XL</button>
      <button className="xs">M</button>
      <button className="xs">L</button>
      <button className="xs">x</button>
      </div>
      <div className="product__card__actio">
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
      </div>
      <div className="button">
        <div className="add-to-cart" onClick={hanleAddToCart}>
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;