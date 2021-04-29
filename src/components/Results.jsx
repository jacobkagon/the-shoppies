import React from 'react';

const Results = ({results}) => {
    return (
        <div>
           <ul>
           {results?.map(movie => ( 
              <li >{movie}</li>
           ))}
           </ul>
        </div>
    );
}

export default Results;
