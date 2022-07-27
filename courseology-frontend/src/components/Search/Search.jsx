import React from "react";
import "./Search.scss";

const Search = ({searchFilter}) => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search courses" onChange={searchFilter} />
    </div>
  );
};

export default Search;