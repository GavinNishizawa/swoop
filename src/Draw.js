

export function draw(){
  var canvas = document.getElementById('canvas');
  let cur = new Point(125, 125);
  var xs = [125, 170,125];
  var ys = [125,125,170];

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
    console.log(cur);
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
