
import { Point } from './Point';

export function draw(points){
  var canvas = document.getElementById('canvas');
  let cur = points[0];

  let subtract = val => new Point(val.x - cur.x, val.y - cur.y);
  points = points.map(subtract);

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    setInterval(() => drawLoop(ctx, cur, points), 500);
  }
}

export function drawLoop(ctx, cur, points){
  ctx.clearRect(0,0,1500,600);
  ctx.beginPath();
  ctx.moveTo(cur.x, cur.y);
  for (var i = 0; i < points.length; i++) {
    cur.x += points[i].x;
    cur.y += points[i].y;
    ctx.lineTo(cur.x, cur.y);
  }
  ctx.closePath();
  ctx.stroke();
}
