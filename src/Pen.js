
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

  // switch to new declaration
  // getFragment(counter, length, points) {
  getFragment(counter, length, xs, ys) {
    let xlength = xs.length;
    let ylength = ys.length;
    let returnArray = [];
    if counter > xlength{
        counter = counter % xlength;
    }
    for (let i = counter; i < xlength; i++){
        returnArray[].push;
    }
    return [];
  }
}
