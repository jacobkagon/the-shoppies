import React from "react";

const Nominations = ({ nominations, setNominations }) => {
  const removeNom = (nom) => {
    let newNoms = nominations.filter((films) => films !== nom);
    setNominations(newNoms);
  };
  return (
    <div>
    <h4>Nominations</h4>
      <ul>
        {nominations?.map((nom) => (
          <li>
            {nom.Title} ({nom.Year})
            <button onClick={() => removeNom(nom)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nominations;
