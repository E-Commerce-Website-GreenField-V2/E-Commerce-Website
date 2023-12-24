import React from "react";

const SearchResults = ({ results }) => {
  console.log(results, "results");
  return (
    <div>
      {results.map((result, i) => {
        return (
          <>
            <div key={i}>{result.name}</div>
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
            <div>{result.price}</div>
          </>
        );
      })}
    </div>
  );
};
export default SearchResults;
