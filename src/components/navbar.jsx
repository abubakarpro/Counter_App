import React, { Component } from "react";
import "./counter.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <span className="navbar-heading">NavBAr</span>
        <span className="navbar-counter"> {this.props.totalcounters}</span>
      </div>
    );
  }
}

export default Navbar;
