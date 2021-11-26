import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
  }

  clickHandler = (state, buttonName) => {
    const resObj = calculate(state, buttonName);
    this.setState({
      ...resObj,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result = 0;
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }

    return (
      <div className="calc-container">
        <div className="led-screen">
          {result || '0'}
        </div>
        <div className="buttons-controls">
          <div className="buttons-row">
            <button name="AC" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">AC</button>
            <button name="+/-" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">+/-</button>
            <button name="%" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">%</button>
            <button name="÷" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">÷</button>
          </div>
          <div className="buttons-row">
            <button name="7" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">7</button>
            <button name="8" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">8</button>
            <button name="9" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">9</button>
            <button name="x" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">x</button>
          </div>
          <div className="buttons-row">
            <button name="4" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">4</button>
            <button name="5" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">5</button>
            <button name="6" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">6</button>
            <button name="-" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">-</button>
          </div>
          <div className="buttons-row">
            <button name="1" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">1</button>
            <button name="2" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">2</button>
            <button name="3" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">3</button>
            <button name="+" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">+</button>
          </div>
          <div className="buttons-row">
            <button name="0" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">0</button>
            <button name="." onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">.</button>
            <button name="=" onClick={(e) => this.clickHandler(this.state, e.target.name)} type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
