import React from "react";
import "./popup.css";
const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return null;
  }
  console.log(results, "results");
  return (
    <div className="popup">
      <div className="popup-content">
        {results?.map((result, i) => {
          return (
            <div key={i}>
              {result.name}
              <img
                src={result.image}
                alt="hi"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <p>{result.price}Dt</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
