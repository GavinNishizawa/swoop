import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent.bs';
import logo from './assets/swoop.png';
import { draw } from './Draw.js';
import { Pen } from './Pen';
import { Point } from './Point';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.pen = new Pen();
    let points = [60,70,80,90,100]
      .map(v => new Point(v, v));

    for(let i = 0; i < 2*points.length; i++) {
      let a = this.pen.getFragment(i, 3, points);
      console.log(a);
    }
    this.onStart = e => this.pen.onStart(e);
    this.onMove = e => this.pen.onMove(e);
  }

  componentDidMount(){
    let points = [
      new Point(100, 10),
      new Point(200, 20),
      new Point(300, 30),
    ];
    draw(points);
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
