

export default function draw(){
  var canvas = document.getElementById('canvas');
  var xs = [125,45,125];
  var ys = [125,125,45];

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(25,25);
    for (var i = 0; i < xs.length; i++) {
      ctx.lineTo(xs[i], ys[i]);
    }
    ctx.closePath();
    ctx.stroke();
  }
}
