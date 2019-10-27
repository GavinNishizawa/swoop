
import { Point } from './Point';

export function draw(ctx, width, height, points, getFrag){

  let deltas = [];
  for(let i = 0; i < points.length; i++) {
    deltas.push( new Point(
      points[i].x - points[0].x,
      points[i].y - points[0].y,
    ));
  }

  let currentPoints = points.map((p) => new Point(p.x, p.y));
  let realLength = currentPoints.length;
  let updatePoints = (pts, start=0) => {
    let newPts = [];

    for (let i = 0; i < realLength; i++) {
      newPts.push(pts[i+start]);
    }
    let lastPoint = pts[start + realLength - 1];
    for (let i = 0; i < realLength; i++) {
      newPts.push( new Point(
        lastPoint.x + deltas[i].x,
        lastPoint.y + deltas[i].y,
      ));
    }
    return newPts;
  }
  currentPoints = updatePoints(currentPoints);
  let time = 1000;
  let steps = 40;
  let counter = 0;
  let interval = setInterval(() => {
    // Draw 1/3 of it at a time
    let segmentLength = realLength/3;

    // What index to start segment at
    let ind = counter % realLength;

    // Get the fragment to draw
    let ptsToDraw = getFrag(ind, segmentLength, currentPoints);

    // Bounce points if necessary
    let newBouncePoints = bounce(ptsToDraw, width, height);

    // If outside stop
    if(newBouncePoints.length === 0){
      clearInterval(interval);
    } else {
      // Draw the points
      drawLoop(ctx, newBouncePoints);
    }

    // If last segment, update points
    if (ind === realLength-1) {
      currentPoints = updatePoints(currentPoints, realLength);
    }
    // Move to next segment
    counter++;
  }, time/steps);
}

function reflectPointX(cur, width){
  var xvalue = cur.x % width;
  var quotient = Math.trunc(cur.x/width);
  var max_quotient = 3;

  if(quotient >= max_quotient){
    return null;
  }else if (quotient % 2 === 0) {
    return new Point(xvalue, cur.y);
  }else{
    return new Point(width - xvalue, cur.y);
  }

}

function reflectPointY(cur, height){
  if(cur == null || cur.y > height || cur.y < 0){
    return null;
  }else{
    return cur;
  }
}

export function bounce(points, width, height){
  let newPoints = points.map((p) => reflectPointX(p, width));
  newPoints = newPoints.map((p) => reflectPointY(p, height));

  let newpointer = [];
  for (var i = 0; i < newPoints.length; i++) {
    if(newPoints[i] != null){
      newpointer.push(newPoints[i]);
    }
  }
  return newpointer;
}

export function drawLoop(ctx, points, balls){
  ctx.clearRect(0,0,1500,600);

  // Draw balls
  balls.forEach(ball => {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fill();
  })

  // Draw line
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
}
