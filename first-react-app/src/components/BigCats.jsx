import React, { useState } from "react";
import SingleCat from "./SingleCat";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "src/images/cheetah.jpeg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "src/images/cougar.jpeg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "src/images/jaguar.jpeg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "src/images/leopard.jpeg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "src/images/lion.jpeg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "src/images/snowleopard.jpeg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "src/images/tiger.jpeg",
  },
];

const BigCats = () => {
  const [bigCatsList, setBigCatsList] = useState(cats);

  const filterLatinName = () => {
    const filteredCats = [...bigCatsList].filter((cats) =>
      cats.latinName.includes("Panthera")
    );
    setBigCatsList(filteredCats);
  };

  const alphaCats = () => {
    const sortedCats = [...bigCatsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setBigCatsList(sortedCats);
  };

  const reverseCats = () => {
    const reversedCats = [...bigCatsList].reverse();
    setBigCatsList(reversedCats);
  };

  const resetList = () => {
    setBigCatsList(cats);
  };

  const deleteCat = (catName) => {
    setBigCatsList(bigCatsList.filter((cat) => cat.name !== catName));
  };

  return (
    <>
      <div className="big-cats-list">
        {bigCatsList.map((cat, id) => (
          <SingleCat key={id} cat={cat} onDelete={deleteCat} />
        ))}
      </div>
      <button onClick={filterLatinName}>Filter by Latin Name</button>
      <button onClick={alphaCats}>Sort Alphabetically</button>
      <button onClick={reverseCats}>Reverse Cats</button>
      <button onClick={resetList}>Reset</button>
    </>
  );
};

export default BigCats;
