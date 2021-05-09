import React, { useState, useEffect } from "react";
import Nominations from "./components/Nominations/Nominations";
import Results from "./components/Results/Results";
import Search from "./components/Search/Search";
import axios from "axios";
import styles from "./App.module.css";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setResults([response.data.Search]))
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <div className={styles.main}>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.row}>
        <div className={styles.card}>
          <Results
            nominations={nominations}
            search={search}
            results={results}
            setNominations={setNominations}
          />
        </div>

        <div className={styles.card}>
          <Nominations
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
