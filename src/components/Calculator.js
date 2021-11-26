import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="calc-container">
        <div className="led-screen">
          0
        </div>
        <div className="buttons-controls">
          <div className="buttons-row">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">÷</button>
          </div>
          <div className="buttons-row">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">x</button>
          </div>
          <div className="buttons-row">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">-</button>
          </div>
          <div className="buttons-row">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">+</button>
          </div>
          <div className="buttons-row">
            <button type="button">0</button>
            <button type="button">.</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
