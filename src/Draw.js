

export function draw(xs, ys){
  var canvas = document.getElementById('canvas');
  let cur = new Point(xs[0], ys[0]);

  let subtractX = val => val - cur.x;
  xs = xs.map(subtractX);

  let subtractY = val => val - cur.y;
  ys = ys.map(subtractY);

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    setInterval(() => drawLoop(ctx, cur, xs, ys), 500);
  }
}

export function drawLoop(ctx, cur, dx, dy){
  ctx.clearRect(0,0,1500,600);
  ctx.beginPath();
  ctx.moveTo(cur.x, cur.y);
  for (var i = 0; i < dx.length; i++) {
    cur.x += dx[i];
    cur.y += dy[i];
    ctx.lineTo(cur.x, cur.y);
  }
  ctx.closePath();
  ctx.stroke();
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
