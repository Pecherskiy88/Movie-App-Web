import React from "react";
import s from "./MovieListItems.module.css";

const MovieListItems = ({ img, name, premiered, season, part }) => {
  let premieredDate = premiered.slice(0, 4);

  return (
    <li className={s.ListItems}>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </li>
  );
};

export default MovieListItems;
