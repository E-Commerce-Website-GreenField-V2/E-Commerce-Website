import Control from "../Controls/Controls.js";
import DrawerNav from "../DrawerNav/DrawerNav.js";
import NavBrand from "../NavBrand/NavBrand.js";
import Form from "../SearchBar/SearchBar.js";
import "./Container.css";
import React, { useState } from "react";
import SearchResults from "../SearchBar/SearchResults.jsx";

const Navtop = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="nav__top__container">
      <div className="top__container">
        <NavBrand />
        <div className="form__container">
          <Form setResults={setResults} />
          <SearchResults results={results} />
        </div>
        <div className="control__bar">
          <Control />
        </div>
        <div className="drawer">
          <DrawerNav />
        </div>
      </div>
    </div>
  );
};

export default Navtop;
