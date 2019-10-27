
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


}
