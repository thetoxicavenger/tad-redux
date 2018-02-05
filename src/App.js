import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrueOrFalseButtonContainer from './containers/TrueOrFalseButtonContainer'

class App extends Component {
  render() {
    return (
      <div>
        <TrueOrFalseButtonContainer/>
      </div>
    );
  }
}

export default App;
