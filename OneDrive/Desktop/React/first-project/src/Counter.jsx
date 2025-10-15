import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initial state
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;