import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const Form = ({ setResults }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchData(input);
  }, [input, setResults]);

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
        if (typeof setResults === "function") {
          setResults(results);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
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
