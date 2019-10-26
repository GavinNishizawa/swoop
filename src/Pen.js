
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
  getFragment(counter, length, points) {
    let pointsLength = points.length;
    let returnArray = [];
    for (let i = counter; i < counter + length; i++){
        var index = i;
        if (returnArray.length < length){
            if (i >= pointsLength){
                index = i % pointsLength;
            }
            console.log("index: " + index);
            returnArray.push(points[index]);
        }
    }
    return returnArray;
  }
}
