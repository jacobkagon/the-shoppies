import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Enter</button>
    </div>
  );
};

export default Search;
