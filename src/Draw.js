
import { Point } from './Point';

export function draw(points){
  var canvas = document.getElementById('canvas');
  let cur = points[0];

  let deltas = [];
  for(let i = 1; i < points.length; i++) {
    deltas.push( new Point(
      points[i].x - points[i-1].x,
      points[i].y - points[i-1].y,
    ));
  }

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    setInterval(() => drawLoop(ctx, cur, deltas), 500);
  }
}

export function drawLoop(ctx, cur, deltas){
  ctx.clearRect(0,0,1500,600);
  ctx.beginPath();
  ctx.moveTo(cur.x, cur.y);
  for (var i = 0; i < deltas.length; i++) {
    cur.x += deltas[i].x;
    cur.y += deltas[i].y;
    ctx.lineTo(cur.x, cur.y);
  }
  ctx.closePath();
  ctx.stroke();
}
