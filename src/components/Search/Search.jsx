import React from "react";
import styles from "./Search.module.css";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <h3>The Shoppies</h3>
      <form className={styles.search}>
        <input
          className={styles.searchbar}
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
