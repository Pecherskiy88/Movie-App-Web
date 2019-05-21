import React from "react";
import s from "./MovieListItems.module.css";

const MovieListItems = ({ data, img, name, premiered, season, part }) => {
  console.log("data: ", data);
  let premieredDate = premiered.slice(0, 4);

  return (
    <li className={s.ListItems}>
      <table>
        <tr>
          <td className={s.ImageBlock}>
            <img className={s.Image} src={img.medium} alt={name} />
          </td>
          <td className={s.Description}>
            <p className={s.Name}>{name}</p>
            <p className={s.PremieredDate}>{premieredDate}</p>
            <p className={s.AboutPart}>
              <span>Сезон: {season}</span>
              <span className={s.Part}>Серия: {part}</span>
            </p>
          </td>
        </tr>
      </table>
    </li>
  );
};

export default MovieListItems;
