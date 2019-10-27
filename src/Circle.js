
import {Point} from './Point.js';

export class Circle {
    constructor(point, radius) {
      this.point = point;
      this.radius = radius;
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

        let radius = Math.floor((Math.random() * 50) + 10);

        let pointX = Math.floor(Math.random() * width) - radius;
        let pointY = Math.floor(Math.random() * height) - radius;

        let circlePoint = new Point(pointX, pointY);
        let finalCircle = new Circle(circlePoint, radius);

        return finalCircle;

    }

}
