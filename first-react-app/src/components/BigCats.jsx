import React from 'react';
import SingleCat from './SingleCat';

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '/module6Lab/src/assets/cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: '/cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: '/jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: '/leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: '/snowleopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '/tiger.jpg' },
];

const BigCats = () => {
  return (
    <div className="big-cats-list">
      {cats.map(cat => (
        <SingleCat key={cat.id} {...cat} />
      ))}
    </div>
  );
};

export default BigCats;