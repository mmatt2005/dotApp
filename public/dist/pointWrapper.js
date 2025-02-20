import { Point } from "./point";
export class PointWrapper {
    constructor(canvas, updateUi) {
        this.points = [];
        this.canvas = canvas;
        this.updateUi = updateUi;
    }
    listeners() {
        this.canvas.addEventListener("click", (event) => {
            this.addPoint(new Point(event.x, event.y));
        });
    }
    addPoint(newPoint) {
        // Theres more than one point already drawn so draw a line that connected the closest point to the newPoint were adding.
        if (this.points.length > 0) {
        }
        this.points.push(newPoint);
        this.updateUi();
    }
    removePoint(removedPoint) {
        this.points = this.points.filter(points => points.id !== removedPoint.id);
        this.updateUi();
    }
}
