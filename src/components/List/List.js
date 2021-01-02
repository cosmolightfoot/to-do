import React from "react";
import { connect } from "react-redux";

const List = ({ todos }) => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  todos: getTodos(state);
};


export default connect(mapStateToProps, mapDispatchToProps)(List);
