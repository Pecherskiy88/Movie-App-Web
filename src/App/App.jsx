import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";
import Datepicker from "../Calendar/Calendar";
// import s from "./App.module.css";

class App extends Component {
  state = {
    date: new Date()
  };
  componentDidMount() {
    this.props.fetch("2019", "05", "21");
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <Datepicker value={date} />
      </div>
    );
  }
}
const mapDispathToProps = dispatch => ({
  fetch: () => dispatch(asyncData("2019", "05", "21"))
});

export default connect(
  null,
  mapDispathToProps
)(App);
