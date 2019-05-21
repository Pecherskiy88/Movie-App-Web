import React from "react";

const MovieListItems = ({ data, img }) => {
  console.log("img: ", data);

  return (
    <li>
      <img src={img.medium} alt="" />
    </li>
  );
};

export default MovieListItems;
