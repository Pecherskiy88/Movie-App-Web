import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetch("2019", "05", "21");
  }
  render() {
    console.log("MovieDate: ", this.props.dateValue);
    return <div>MovieList</div>;
  }
}
const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(asyncData("2019", "05", "21"))
});

export default connect(
  null,
  mapDispatchToProps
)(MovieList);
