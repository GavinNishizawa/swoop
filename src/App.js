import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TestComponent from './TestComponent.bs';
import logo from './assets/swoop.png';
import { draw } from './Draw.js';
import { Pen } from './Pen';
import { Point } from './Point';
import { Circle } from './Circle'
// import Colors from './Colors';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.pen = new Pen();
    // let points = [10,20,30,40,50]
    //   .map(v => new Point(v, v));
    // for(let i = 0; i < 2*points.length; i++) {
    //   console.log(this.pen.getFragment(i, 3, points));
    // }
    this.width = 1200;
    this.height = 600;

    this.balls = [];
    this.interval = null;

    // let testpoint = new Point(130,130);
    // let testpointin = new Point(1, 1);
    // let testpointout = new Point(9, 0);
    // let testpointon = new Point(7, 3);
    // let testcircle = new Circle(testpoint, 30, Colors.blue);
    // console.log(testcircle);
    // console.log(testcircle.checkPoint(testpointin));
    // console.log(testcircle.checkPoint(testpointout));
    // console.log(testcircle.checkPoint(testpointon));

    this.onStart = e => {
      e.preventDefault();
      this.pen.onStart(e);
    };
    this.onMove = e => {
      e.preventDefault();
      this.pen.onMove(e);
    };
    this.onStop = () => {
      if (this.interval) {
        // Clear old interval
        clearInterval(this.interval);
        this.interval = null;
      }
      let canvasEl = document.getElementById('canvas');
      if(canvasEl.getContext){
        let ctx = canvasEl.getContext('2d');
        let canvasPos = canvasEl.getBoundingClientRect();
        let {xs, ys} = this.pen;
        let len = xs.length < ys.length ? xs.length : ys.length;
        let pts = [];
        let fixX = x => (x - canvasPos.x) * this.width / canvasPos.width;
        let fixY = y => (y - canvasPos.y) * this.height / canvasPos.height;
        for(let i = 0; i < len; i++) {
          pts.push(new Point(fixX(xs[i]), fixY(ys[i])));
        }
        this.interval = draw(
          ctx,
          canvasEl.width,
          canvasEl.height,
          pts,
          this.pen.getFragment,
          this.balls
        );
      }
      // console.log(this.pen);
    };

    this.makeCircles = () => {
      this.balls = [];
      for (var i = 0; i < 20; i++){
        let testcircle1 = Circle.makeCircles(this.width, this.height);
        this.balls.push(testcircle1);
      }
    }
    this.reset = () => {
      if (this.interval) {
        // Clear old interval
        clearInterval(this.interval);
        this.interval = null;
      }
      this.makeCircles();
    }
  }
  componentDidMount() {
    this.makeCircles();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"/>
          <div className="logo">
            <img className="App-logo" src={logo} alt="swoop-logo"/>
            <p className="rules">
              <span className="relaxation">
                Promoting relaxation through colors!
              </span>
              <br />
              Rules are simple. Draw a line and see it pop the dots.
            </p>
          </div>
          <button type="button" onClick={this.reset}>Reset</button>
          <canvas id='canvas' width={this.width} height={this.height}
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
