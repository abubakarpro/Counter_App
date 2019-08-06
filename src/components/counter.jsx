import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="main">
        <span className={this.changing_classes()}>{this.formate()}</span>
        <button
          className="Increment-btn"
          onClick={() => this.props.onIncrement(this.props.counters.id)}
        >
          Increment
        </button>
        <button
          className="del-btn"
          onClick={() => this.props.onDelete(this.props.counters.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  formate() {
    if (this.props.counters.value === 0) {
      // return <h1>Zero</h1>;
      return "Zero";
    } else {
      return this.props.counters.value;
    }
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }

  changing_classes() {
    let classes = "main-heading-";
    return (classes += this.props.counters.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
