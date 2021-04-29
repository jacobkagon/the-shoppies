import React, { useState, useEffect } from "react";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
 
    axios
      .get(
        `https://omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setResults([response.data.Search]))
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        
      />
      <Results search={search} results={results} />
      <Nominations />
    </div>
  );
}

export default App;
