
import {Point} from './Point.js';
import Colors from './Colors.js';

export class Circle {
    constructor(point, radius, color) {
      this.point = point;
      this.radius = radius;
      this.color = color;
    }

    checkPoint(point){
        let pointX = this.point.x;
        let pointY = this.point.y;
        let radius = this.radius;

        let point1X = point.x;
        let point1Y = point.y;

        let distance = Math.sqrt(Math.pow(point1X - pointX, 2) + Math.pow(point1Y - pointY, 2));

        if (distance > radius){
            return false;
        }
        else {
            return true;
        }
    }

    static makeCircles(width, height){

        let radius = Math.floor((Math.random() * height/12) + 10);

        let pointX = Math.floor(Math.random() * (width - 2*radius) + radius);
        let pointY = Math.floor(Math.random() * (height - 2*radius) + radius);

        let colorNum = Math.floor(Math.random() * 4);
        let colors = [Colors.blue, Colors.orange, Colors.green, Colors.pink];
        let color = colors[colorNum];
        let circlePoint = new Point(pointX, pointY);
        let finalCircle = new Circle(circlePoint, radius, color);

        return finalCircle;

    }

}
