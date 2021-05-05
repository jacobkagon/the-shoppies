import React from "react";
import "./Search.module.css"

const Search = ({ search, setSearch }) => {
  return (
    <div className="justify-center">
    <h3>The Shoppies</h3>
    <form>
      <input
      className="search-bar"
        value={search}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      
      </form>
    </div>
  );
};

export default Search;
