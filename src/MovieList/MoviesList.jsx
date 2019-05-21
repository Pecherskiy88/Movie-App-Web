import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";
import MovieListItems from "../MovieListItems/MovieListItems";
import Loader from "react-loader-spinner";

class MovieList extends Component {
  componentDidMount() {
    let fullDate = this.props.dateValue; // дата при клике в календаре

    let year = fullDate.getFullYear();
    // Добавялем 1 для отображения 0 месяца, как 1ого и проверка: к однозначному числу добавляем "0"
    let month =
      fullDate.getMonth() + 1 < 10
        ? "0" + fullDate.getMonth()
        : fullDate.getMonth();
    // проверка: к однозначному числу добавляем "0"
    let day =
      fullDate.getDate() < 10 ? "0" + fullDate.getDate() : fullDate.getDate();

    this.props.fetch(year, month, day); // передаем аргументы фетчу, что бы подставить переменные в url
  }
  render() {
    const { fetchData } = this.props;
    console.log(fetchData);
    return (
      <ul>
        {fetchData.length === 0 ? (
          <Loader type="Plane" color="#00BFFF" height="100" width="100" />
        ) : (
          <MovieListItems />
        )}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  fetchData: state.fetchData
});
const mapDispatchToProps = dispatch => ({
  fetch: (year, month, day) => dispatch(asyncData(year, month, day))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
