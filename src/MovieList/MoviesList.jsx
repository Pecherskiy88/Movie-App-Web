import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncData } from "../redux/action/fetchAction";

class MovieList extends Component {
  componentDidMount() {
    console.log("MovieDate: ", this.props.dateValue);
    let date = this.props.dateValue;
    this.props.fetch();
  }
  render() {
    return <div>MovieList</div>;
  }
}
const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(asyncData("2019", "05", "30"))
});

export default connect(
  null,
  mapDispatchToProps
)(MovieList);
