import React from 'react';

const Results = ({search, results}) => {
    return (
        <div>
        { search ?
        <div>
        <p><strong>Results for "{search}"</strong></p>
           <ul>
           {results[0]?.map(movie => ( 
              <li>{movie.Title}({movie.Year})
              <button>Nominate</button>
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
