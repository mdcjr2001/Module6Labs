import React from 'react';

const SingleCat = ({ id, name, latinName, image }) => {
  return (
    <div key={id} className="cat-item">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{latinName}</p>
      </div>
    </div>
  );
};

export default SingleCat;