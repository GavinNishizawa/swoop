import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent.bs';
import logo from './assets/swoop.png';
import { draw } from './Draw.js';
import { Pen } from './Pen';
import { Point } from './Point';
import { Circle } from './Circle'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.pen = new Pen();
    // let points = [10,20,30,40,50]
    //   .map(v => new Point(v, v));
    // for(let i = 0; i < 2*points.length; i++) {
    //   console.log(this.pen.getFragment(i, 3, points));
    // }

    for (var i = 0; i < 20; i++){
        let testcircle1 = Circle.makeCircles(1200, 500);
        console.log(testcircle1);
    }


    this.onStart = e => this.pen.onStart(e);
    this.onMove = e => this.pen.onMove(e);
    this.onStop = () => {
      let canvasEl = document.getElementById('canvas');
      if(canvasEl.getContext){
        let ctx = canvasEl.getContext('2d');
        let canvasPos = canvasEl.getBoundingClientRect();
        let {xs, ys} = this.pen;
        let len = xs.length < ys.length ? xs.length : ys.length;
        let pts = [];
        for(let i = 0; i < len; i++) {
          pts.push(new Point(xs[i] - canvasPos.x, ys[i] - canvasPos.y));
        }
        draw(ctx, canvasEl.width, canvasEl.height, pts, this.pen.getFragment);
      }
      // console.log(this.pen);
    };
  }
  componentDidMount() {
    // let points = [
    //   new Point(100, 10),
    //   new Point(200, 20),
    //   new Point(300, 30),
    // ];
    // draw(points);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"/>
        <div className="logo">
            <img className="App-logo" src={logo} alt="swoop-logo"/>
            <p className="rules">
                <span className="relaxation">Promoting relaxation through colors!</span> Rules are simple. Draw a line and see it pop the dots.
            </p>
        </div>
          <canvas id='canvas' width="1200" height="600"
            onPointerDown={this.onStart}
            onPointerMove={this.onMove}
            onPointerUp={this.onStop}
          />
        </header>
      </div>
    );
  }
}

export default App;
