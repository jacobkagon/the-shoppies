import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
    <form>
      <input
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
