import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent.bs';
import logo from './assets/swoop.png'
import { draw } from './Draw.js';
import { Pen } from './Pen';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.pen = new Pen();
    let testXs = [10,20,30,40,50,60,70,80,90,100];
    let testYs = [10,20,30,40,50,60,70,80,90,100];
    for(let i = 0; i < 10; i++) {
      this.pen.getFragment(i, 3, testXs, testYs);
    }
    this.onStart = e => this.pen.onStart(e);
    this.onMove = e => this.pen.onMove(e);
  }

  componentDidMount(){
    let xs = [125,170,125];
    let ys = [125,125,170];
    draw(xs, ys);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="App-logo" src={logo} alt="swoop-logo"/>
          <canvas id='canvas' width="1200" height="600"
            onPointerDown={this.onStart}
            onPointerMove={this.onMove}
          />
          <TestComponent />
        </header>
      </div>
    );
  }
}

export default App;
