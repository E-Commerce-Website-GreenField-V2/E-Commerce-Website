import React, { useState } from "react";
import axios from "axios";
import { useUserId } from "../../Context/userContext.js";
import "./AddProduct.css";
import Cloudinary from "../Cloudinary.jsx";

const AddProduct = () => {
  const [imageUrls, setImageUrls] = useState("");
  const { userId } = useUserId();
  console.log(imageUrls[0], "imageUrls");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: imageUrls[0],
    description: "",
    quantity: "",
    sellerProduct: userId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(productData);
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();

    try {
      if (!productData.image) {
        setProductData((prevData) => ({
          ...prevData,
          image: imageUrls[0],
        }));
      }
      const response = await axios.post(
        "http://localhost:8000/products/",
        productData
      );

      if (response.data) {
        setSuccessMessage("Product added successfully!");
        setErrorMessage("");
      } else {
        setSuccessMessage("");
        setErrorMessage("Failed to add product. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error during product addition. Please try again.");
      console.error("Error during product addition:", error);
    }
  };
  return (
    <div className="add-product__card__container">
      <div className="add-product__card">
        <div className="add-product__header">
          <h1>Add Product</h1>
        </div>
        <form onSubmit={handleAddProduct}>
          <div className="add-product__inputs">
            <div className="name__input__container add-product__input__container">
              <label className="name__label input__label">Product Name</label>
              <input
                name="name"
                type="text"
                value={productData.name}
                onChange={handleInputChange}
                className="name__input add-product__input"
                required
              />
            </div>
            <div className="price__input__container add-product__input__container">
              <label className="price__label input__label">Price</label>
              <input
                name="price"
                type="number"
                value={productData.price}
                onChange={handleInputChange}
                className="price__input add-product__input"
                required
              />
            </div>
            <div className="image__input__container add-product__input__container">
              <label className="image__label input__label">Image</label>
              <Cloudinary setImageUrls={setProductData} />
            </div>
            <div className="description__input__container add-product__input__container">
              <label className="description__label input__label">
                Description
              </label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleInputChange}
                className="description__input add-product__input"
                required
              />
            </div>
            <div className="quantity__input__container add-product__input__container">
              <label className="quantity__label input__label">Quantity</label>
              <input
                name="quantity"
                type="number"
                value={productData.quantity}
                onChange={handleInputChange}
                className="quantity__input add-product__input"
                required
              />
            </div>
            <div className="add-product__button__container">
              <button type="submit" className="add-product__button">
                Add Product
              </button>
            </div>
          </div>
        </form>
        {errorMessage && (
          <div className="add-product__error-message">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="add-product__success-message">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
