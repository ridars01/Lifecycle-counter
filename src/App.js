import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";
class App extends Component {
  //INTALIZATION
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  incrementCounter = () =>{
    let currentCountValue = this.state.counter
    this.setState({
      counter: ++currentCountValue
    })
  }
  // MOUNTING & UPDATING
  render() {
    return (
      <div className="main--container">
        <div className="counter--border">
          <div className="counter--container">
            <Counter counter={this.state.counter} />
            <button onClick={this.incrementCounter}>Click Me!</button>
          </div>
        </div>
        <div className="sih--div--green"></div>
        <div className="sih--div--orange"></div>
      </div>
    );
  }
}
export default App