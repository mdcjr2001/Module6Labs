import React from 'react';

const SingleCat = ({cat, onDelete }) => {
  return (
    <div key={cat.id} className="cat-item">
      <img src={cat.image} alt={cat.name} />
      <div>
        <h3>{cat.name}</h3>
        <p>{cat.latinName}</p>
      </div>
      <button onClick={()=> onDelete(cat.name)}>Delete</button>
    </div>
  );
};

export default SingleCat;