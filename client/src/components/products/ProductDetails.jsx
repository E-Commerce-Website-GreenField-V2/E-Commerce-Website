import { useEffect, useState } from "react";
import { Button } from "@mui/material";
// import "../../style/ProductDetails.css"


const ProductDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [id,setId]=useState(1)

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
  
  const handleAddToCart = () => {
 
    console.log(`Added ${quantity} ${product.name} to the cart.`);
    
  };

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

      <div className="button">
        <div className="add-to-cart" onClick={handleAddToCart}>
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;