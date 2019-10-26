
import { Point } from './Point';

export function draw(points){
  var canvas = document.getElementById('canvas');
  let cur = points[0];
  let deltas = [];
  let currentPoints = points.map((p) => new Point(p.x, p.y));

  for(let i = 0; i < points.length; i++) {
    deltas.push( new Point(
      points[i].x - points[0].x,
      points[i].y - points[0].y,
    ));
  }


  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    var interval = setInterval(() => {
      for(let i = 0; i < currentPoints.length; i++) {
        currentPoints[i] = new Point(
          currentPoints[currentPoints.length - 1].x + deltas[i].x,
          currentPoints[currentPoints.length - 1].y + deltas[i].y,
        )
      }
      //console.log(currentPoints);
      let newBouncePoints = bounce(currentPoints, canvas.width, canvas.height)
      //console.log(newBouncePoints);
      if(newBouncePoints.length == 0){
        clearInterval(interval);
      }else{
        drawLoop(ctx, newBouncePoints)
      }
    }, 50);
  }
}

function reflectPointX(cur, width){
  var rawQuotient = cur.x/width;
  var remainder = cur.x % width;
  var quotient = rawQuotient * width - remainder;
  console.log(rawQuotient);
  console.log(remainder);
  console.log(quotient);
  if(Math.trunc(quotient % 2) === 0){
      return new Point(remainder, cur.y);
  }else{
    return new Point(-remainder, cur.y);
  }

}

function reflectPointY(cur, height){
  if(cur.y > height || cur.y < 0){
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

export function drawLoop(ctx, points){
  ctx.clearRect(0,0,1500,600);
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (var i = 0; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.closePath();
  ctx.stroke();
}
