/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './index.css';
import Calculator from './components/Calculator';

export default class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}
