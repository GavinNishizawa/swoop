import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent.bs';
import {draw, drawLoop} from './Draw.js';

class App extends React.Component {
  componentDidMount(){
    Draw();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <canvas id='canvas' width="1200" height="600"/>
          <TestComponent />
        </header>
      </div>
    );
  }
}

export default App;
