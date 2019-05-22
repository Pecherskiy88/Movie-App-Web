import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";
import MovieListItems from "../MovieListItems/MovieListItems";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import s from "./MoviesList.module.css";

class MovieList extends Component {
  componentDidMount() {
    const transformToCorrectDate = inputDate => {
      let fullDate = inputDate; // дата при клике в календаре

      let year = fullDate.getFullYear().toString();
      // Добавялем 1 для отображения 0 месяца, как 1ого и проверка: к однозначному числу добавляем "0"
      let month =
        fullDate.getMonth() + 1 < 10
          ? "0" + (fullDate.getMonth() + 1)
          : (fullDate.getMonth() + 1).toString();
      // проверка: к однозначному числу добавляем "0"
      let day =
        fullDate.getDate() < 10
          ? "0" + fullDate.getDate()
          : fullDate.getDate().toString();

      return `${year}-${month}-${day}`;
    };

    this.props.fetch(transformToCorrectDate(this.props.dateValue)); // передаем аргументы фетчу, что бы подставить переменные в url
  }
  render() {
    const { fetchData } = this.props;
    return (
      <div>
        <NavLink className={s.Btn} to="/">
          НАЗАД
        </NavLink>
        <ul className={s.List}>
          {fetchData.length === 0 ? (
            <Loader type="Plane" color="#00BFFF" height="100" width="100" />
          ) : (
            fetchData.map(el => (
              <MovieListItems
                data={el}
                name={el.show.name}
                premiered={el.show.premiered}
                season={el.season}
                part={el.number}
                img={
                  el.show.image === null
                    ? (el.show.image = "no image")
                    : el.show.image
                }
                key={el.id}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  fetchData: state.fetchData
});
const mapDispatchToProps = dispatch => ({
  fetch: inputDate => dispatch(asyncData(inputDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
