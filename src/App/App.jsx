import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";
// import s from "./App.module.css";

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return <div />;
  }
}
const mapDispathToProps = dispatch => ({
  fetch: () => dispatch(asyncData())
});

export default connect(
  null,
  mapDispathToProps
)(App);
