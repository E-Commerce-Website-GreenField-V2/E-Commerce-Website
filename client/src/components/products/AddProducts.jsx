import React, { useState } from "react";
import axios from "axios";
import { useUserId } from "../../Context/userContext.js";
import './AddProduct.css';

const AddProduct = () => {
  const { userId } = useUserId();
  console.log("id",userId);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    imageUrl: '',
    description: '',
    availability: 1,
    quantity: '',
    rate: 0,
    sellerProduct: userId, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProductData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/products/', productData);

      console.log('res', response.data);

      if (response.data) {
        setSuccessMessage('Product added successfully!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Failed to add product. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error during product addition. Please try again.');
      console.error('Error during product addition:', error);
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
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="image__input add-product__input"
                required
              />
            </div>
            <div className="description__input__container add-product__input__container">
              <label className="description__label input__label">Description</label>
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
        {errorMessage && <div className="add-product__error-message">{errorMessage}</div>}
        {successMessage && <div className="add-product__success-message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default AddProduct;


