import React, { Component } from "react";
import Counters from "./components/Counters";

import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <Navbar totalcounters={this.state.counters.length} />
        <main className="container" />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />

        <main />
      </div>
    );
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counterId => {
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;
    // this.setState({ counters });
    const newCounters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value++;
      }
      return c;
    });
    this.setState({ newCounters });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ newCounters });
  };
}

export default App;
