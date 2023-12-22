import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext";

const Form = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setProducts(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to fetch products only once 
 

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Filter products based on the search input
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Update the search results in the context
    searchContext.setSearchResults(filteredProducts);

    // Redirect to the search results page
    navigate("/search");
  };

  return (
    <form className="search__form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search for products"
        className="search__form__input"
        value={searchInput}
        onChange={handleChange}
        required
      />
      <button className="search__form__button" type="submit">
        <SearchIcon fontSize="medium" />
      </button>
    </form>
  );
};

export default Form;
