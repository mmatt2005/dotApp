export class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }
    draw(context) {
        context.beginPath();
        context.moveTo(this.point1.x, this.point1.y);
        context.lineTo(this.point2.x, this.point2.y);
        context.stroke();
    }
}
