import React from "react";

const Filters = ({ updateFilter, currentFilter, filtersValues }) => {
  // console.log("yes", filtersValues);
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        {Object.entries(filtersValues).map(([key, value]) => (
          <div
            key={key}
            className={`restaurant-option ${
              currentFilter === value ? "underline" : ""
            }`}
            onClick={() => updateFilter(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
