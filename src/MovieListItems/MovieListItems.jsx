import React from "react";

const MovieListItems = ({ data, img, name, premiered, season, part }) => {
  console.log("data: ", data);
  let premieredDate = premiered.slice(0, 4);

  return (
    <li>
      <p>{data.airstamp.slice(0, 10)}</p>
      <img src={img.medium} alt={name} />
      <p>{name}</p>
      <p>{premieredDate}</p>
      <p>
        <span>Сезон: {season}</span>
        <span>Серия: {part}</span>
      </p>
    </li>
  );
};

export default MovieListItems;
