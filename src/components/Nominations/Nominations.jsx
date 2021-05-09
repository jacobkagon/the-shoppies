import React from "react";
import "./Nominations.module.css"

const Nominations = ({ nominations, setNominations }) => {
  const removeNom = (nom) => {
    let newNoms = nominations.filter((films) => films !== nom);
    setNominations(newNoms);
  };
  return (
    <div>
    <h4>Nominations</h4>
    {nominations.length >=5 ? <h5 className="error">Nomination Limit Reached</h5> : null}
      <ul>
        {nominations?.map((nom) => (
          <li>
            {nom.Title} ({nom.Year})
            <button className="btn" onClick={() => removeNom(nom)}>Remove</button>
          </li>
        ))}
      </ul>
  
    </div>
  );
};

export default Nominations;
