import Control from "../Controls/Controls.js";
import DrawerNav from "../DrawerNav/DrawerNav.js";
import NavBrand from "../NavBrand/NavBrand.js";
import Form from "../SearchBar/SearchBar.js";
import React, { useState } from "react";

import "./Container.css";
import SearchResults from "../SearchBar/SearchResults.jsx";

const Navtop = () => {
  const [results, setResults] = useState([]);

  console.log(results, "22");
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
