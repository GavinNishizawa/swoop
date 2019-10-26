import React from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './Draw.js';
import { make as TestComponent } from './TestComponent.bs';

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
