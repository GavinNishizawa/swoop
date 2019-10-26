

export function draw(){
  var canvas = document.getElementById('canvas');
  let cur = new Point(200, 200);
  var xs = [300, 200, 100, 200, 270];
  var ys = [200, 300, 200, 100, 230];

  let subtractX = val => val - cur.x;
  xs = xs.map(subtractX);

  let subtractY = val => val - cur.y;
  ys = ys.map(subtractY);

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(cur.x, cur.y);
    for(let i = 0; i< 10; i++) {
      drawLoop(ctx, cur, xs, ys);
    }
    ctx.closePath();
    ctx.stroke();
  }
}

export function drawLoop(ctx, cur, dx, dy){
  for (var i = 0; i < dx.length; i++) {
    cur.x += dx[i];
    cur.y += dy[i];
    console.log(cur);
    ctx.lineTo(cur.x, cur.y);
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}