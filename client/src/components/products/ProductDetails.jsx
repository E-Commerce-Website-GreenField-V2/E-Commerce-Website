import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "../components/ProductDetails.css";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [id,setId]=useState(0)

  useEffect(() => {
    const fetchProductDetails = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const responseData = await response.json();
        setProduct(responseData);
        setId(1)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails(id);
  }, [id]); // Empty dependency array ensures that the effect runs only once

  const handleAddToCart = () => {
    // Placeholder logic for adding to the cart
    console.log(`Added ${quantity} ${product.name} to the cart.`);
    // Implement your cart logic here (e.g., API request to add to the cart)
  };

  if (!product) {
    return <div>Loading...</div>; // You might want to show a loading spinner or message
  }
  const formattedPrice = product.price !== undefined && typeof product.price === "number"
  ? `$${product.price.toFixed(2)}`
  : "Invalid Price";

  return (
    <div className="product-details-page">
      {/* Your existing JSX code here */}
      <div className="havic-hv-g-92">{product.name}</div>
      <div className="div">{formattedPrice}</div>
      <div className="frame-group">
        {/* Render product images */}
        <div className="image-gallery">
          {product.images.map((image, index) => (
            <img key={index} className="product-image" src={image} alt={`Product ${index + 1}`} />
          ))}
        </div>
        {/* ... More existing JSX code */}
      </div>
      <div className="playstation-5-controller">{product.description}</div>
      {/* Quantity selector */}
      <div className="quantity-selector">
        <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
        <div className="quantity">{quantity}</div>
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </div>
      {/* Remaining JSX code */}
      <div className="button">
        {/* Use the product ID when adding to the cart or performing other actions */}
        <div className="add-to-cart" onClick={handleAddToCart}>
          Buy Now
        </div>
      </div>
      {/* ... More JSX code */}
    </div>
  );
};

export default ProductDetailsPage;
