import React, { Component } from "react";
import Calendar from "react-calendar";
import { Switch, Route, NavLink } from "react-router-dom";
import MoviesList from "../MovieList/MoviesList";
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
              <div>
                <NavLink to="/movies">GO</NavLink>

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
