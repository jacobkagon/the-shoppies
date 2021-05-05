import React from 'react';
import "./Results.module.css"

const Results = ({search, results, setNominations, nominations}) => {
    return (
        <div>
        { search ?
        <div>
        <h4>Results for "{search}"</h4>
           <ul>
           {results[0]?.map(movie => ( 
              <li>{movie.Title} ({movie.Year})
              { nominations.includes(movie) || nominations.length === 5?<button className="button-disabled">Nominate</button>
              : <button onClick={() => setNominations([...nominations, movie])}>Nominate</button>
              }
             
              </li>
           ))}
           
           </ul> 
           </div>
           : null
        }
        </div>
    );
}

export default Results;
