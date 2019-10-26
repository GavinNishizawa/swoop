import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent.bs';
import Draw from './Draw.js';
import logo from './assests/swoop.png'

class App extends React.Component {
  componentDidMount(){
    Draw();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="App-logo" src={logo} alt="swoop-logo"/>
          <canvas id='canvas' width="1200" height="600"/>
          <TestComponent />
        </header>
      </div>
    );
  }
}

export default App;
