import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";

class MovieList extends Component {
  componentDidMount() {
    console.log("MovieDate: ", this.props.dateValue);
    let fullDate = this.props.dateValue;

    let year = fullDate.getFullYear();
    let month =
      fullDate.getMonth() + 1 < 10
        ? "0" + fullDate.getMonth()
        : fullDate.getMonth();
    let day =
      fullDate.getDate() < 10 ? "0" + fullDate.getDate() : fullDate.getDate;

    this.props.fetch(year, month, day);
  }
  render() {
    return <div>MovieList</div>;
  }
}
const mapDispatchToProps = dispatch => ({
  fetch: (year, month, day) => dispatch(asyncData(year, month, day))
});

export default connect(
  null,
  mapDispatchToProps
)(MovieList);
