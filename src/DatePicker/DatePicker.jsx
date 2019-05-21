import React, { Component } from "react";
import Calendar from "react-calendar";
import { Switch, Route, NavLink } from "react-router-dom";
import MoviesList from "../MovieList/MoviesList";

class DatePicker extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });
  render() {
    const { date } = this.state;
    return (
      <div>
        <NavLink to="/movies">GO</NavLink>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Calendar {...props} dateValue={date} onChange={this.onChange} />
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
