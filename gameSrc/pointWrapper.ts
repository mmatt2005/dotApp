import { Point } from "./point";

export class PointWrapper { 
    constructor(canvas: HTMLCanvasElement, updateUi: () => void) {
        this.canvas = canvas
        this.updateUi = updateUi
    }
    canvas: HTMLCanvasElement
    updateUi: () => void

    points: Point[] = []

    listeners() { 
        this.canvas.addEventListener("click", (event) => {
            this.addPoint(new Point(event.x, event.y))
        })
    }

    addPoint(newPoint: Point) {
        // Theres more than one point already drawn so draw a line that connected the closest point to the newPoint were adding.
        if (this.points.length > 0) {
            
        }

        this.points.push(newPoint)
        this.updateUi()
    }

    removePoint(removedPoint: Point) { 
        this.points = this.points.filter(points => points.id !== removedPoint.id)
        this.updateUi()
    }
}