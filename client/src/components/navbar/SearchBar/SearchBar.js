import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext";

const Form = ({ setResults }) => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const searchContext = useContext(SearchContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const fetchData = (value) => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((json) => {
        console.log("2", json);
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          );
        });
        console.log("1", results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <form className="search__form">
      <input
        type="text"
        placeholder="Search for products"
        className="search__form__input"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <button className="search__form__button" type="submit">
        <SearchIcon fontSize="medium" />
      </button>
    </form>
  );
};

export default Form;
