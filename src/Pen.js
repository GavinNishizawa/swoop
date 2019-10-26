
export class Pen {
  constructor() {
    this.xs = [];
    this.ys = [];
  }

  onStart(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.xs = [x];
    this.ys = [y];
    console.log('start')
  }

  onMove(event) {
    let x =  event.clientX;
    let y =  event.clientY;
    console.log(`move: ${x},${y}`)

    // this.xs.push(x);
    // this.ys.push(y);
  }

  getFragment(counter, length, xs, ys) {
    return [];
  }
}

