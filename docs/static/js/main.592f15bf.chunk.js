(this.webpackJsonpswoop=this.webpackJsonpswoop||[]).push([[0],[,,,,,,function(t,n,e){t.exports=e.p+"static/media/swoop.a31528de.png"},,,function(t,n,e){t.exports=e(16)},,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(4),i=e.n(r),c=(e(14),e(1)),u=e(2),h=e(7),s=e(5),l=e(8),f=(e(15),e(6)),p=e.n(f),v=function t(n,e){Object(c.a)(this,t),this.x=n,this.y=e};function g(t,n,e,o,a,r){for(var i=[],c=0;c<o.length;c++)i.push(new v(o[c].x-o[0].x,o[c].y-o[0].y));var u=o.map((function(t){return new v(t.x,t.y)})),h=u.length,s=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[],o=0;o<h;o++)e.push(t[o+n]);for(var a=t[n+h-1],r=0;r<h;r++)e.push(new v(a.x+i[r].x,a.y+i[r].y));return e};u=s(u);var l=0,f=setInterval((function(){var o=l%h,i=function(t,n,e){var o=t.map((function(t){return function(t,n){var e=t.x%n,o=Math.trunc(t.x/n);return o>=3?null:new v(o%2===0?e:n-e,t.y)}(t,n)}));o=o.map((function(t){return function(t,n){return null==t||t.y>n||t.y<0?null:t}(t,e)}));for(var a=[],r=0;r<o.length;r++)null!=o[r]&&a.push(o[r]);return a}(a(o,h/3,u),n,e);0===i.length?clearInterval(f):function(t,n,e){t.clearRect(0,0,1500,600),t.lineWidth=3,t.beginPath(),t.moveTo(n[0].x,n[0].y);for(var o=0;o<n.length;o++)t.lineTo(n[o].x,n[o].y),e&&e.forEach((function(t,a){t.checkPoint(n[o])&&delete e[a]}));t.stroke(),e&&e.forEach((function(n){t.fillStyle=n.color,t.beginPath(),t.arc(n.point.x,n.point.y,n.radius,0,2*Math.PI),t.fill()}))}(t,i,r),o===h-1&&(u=s(u,h)),l++}),25)}var m=function(){function t(){Object(c.a)(this,t),this.xs=[],this.ys=[]}return Object(u.a)(t,[{key:"onStart",value:function(t){var n=t.clientX,e=t.clientY;this.xs=[n],this.ys=[e]}},{key:"onMove",value:function(t){var n=t.clientX,e=t.clientY;this.xs.push(n),this.ys.push(e)}},{key:"getFragment",value:function(t,n,e){for(var o=e.length,a=[],r=t;r<t+n;r++){var i=r;a.length<n&&(r>=o&&(i=r%o),a.push(e[i]))}return a}}]),t}(),d="#F36E3E",y="#EE5E74",w="#98CA4E",x="#1FA8C3",M=function(){function t(n,e,o){Object(c.a)(this,t),this.point=n,this.radius=e,this.color=o}return Object(u.a)(t,[{key:"checkPoint",value:function(t){var n=this.point.x,e=this.point.y,o=this.radius,a=t.x,r=t.y;return!(Math.sqrt(Math.pow(a-n,2)+Math.pow(r-e,2))>o)}}],[{key:"makeCircles",value:function(n,e){var o=Math.floor(50*Math.random()+10),a=Math.floor(Math.random()*n)-o,r=Math.floor(Math.random()*e)-o,i=Math.floor(4*Math.random()),c=[x,d,w,y][i];return new t(new v(a,r),o,c)}}]),t}(),k=function(t){function n(t){var e;Object(c.a)(this,n),(e=Object(h.a)(this,Object(s.a)(n).call(this,t))).pen=new m;for(var o=[],a=0;a<20;a++){var r=M.makeCircles(1200,500);o.push(r)}return e.onStart=function(t){return e.pen.onStart(t)},e.onMove=function(t){return e.pen.onMove(t)},e.onStop=function(){var t=document.getElementById("canvas");if(t.getContext){for(var n=t.getContext("2d"),a=t.getBoundingClientRect(),r=e.pen,i=r.xs,c=r.ys,u=i.length<c.length?i.length:c.length,h=[],s=0;s<u;s++)h.push(new v(i[s]-a.x,c[s]-a.y));g(n,t.width,t.height,h,e.pen.getFragment,o)}},e}return Object(l.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{className:"App-logo",src:p.a,alt:"swoop-logo"}),a.a.createElement("canvas",{id:"canvas",width:"1200",height:"600",onPointerDown:this.onStart,onPointerMove:this.onMove,onPointerUp:this.onStop})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.592f15bf.chunk.js.map