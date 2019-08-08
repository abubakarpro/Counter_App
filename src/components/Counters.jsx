import React, { Component } from "react";
import Counter from "./counter";
import "./counter.css";

class Counters extends Component {
  render() {
    return (
      <div>
        <button className="reset-btn" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counters={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
