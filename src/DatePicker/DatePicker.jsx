import React, { Component } from "react";
import Calendar from "react-calendar";
import { Switch, Route, NavLink } from "react-router-dom";
import MoviesList from "../MovieList/MoviesList";
import TvImg from "../assets/tv.jpg";
import s from "./DatePicker.module.css";

class DatePicker extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });
  render() {
    const { date } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div className={s.Wrapper}>
                <img
                  className={s.Img}
                  src={TvImg}
                  alt="выбепмие дату и нажмите просмотреть"
                />
                <p className={s.Text}>
                  Для получения списка сериалов, выберите интересующую дату и
                  нажмите{" "}
                  <NavLink className={s.Btn} to="/movies">
                    Просмотреть >>
                  </NavLink>
                </p>
                <Calendar
                  className={s.Calendar}
                  {...props}
                  dateValue={date}
                  onChange={this.onChange}
                />
              </div>
            )}
          />
          <Route
            path="/movies"
            render={props => <MoviesList {...props} dateValue={date} />}
          />
        </Switch>
      </div>
    );
  }
}

export default DatePicker;
