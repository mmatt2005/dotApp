import { Line } from "./line";
import { Point } from "./point";

export class GeometryWrapper {
    constructor(canvas: HTMLCanvasElement, updateUi: () => void) {
        this.canvas = canvas
        this.updateUi = updateUi
    }

    points: Point[] = []
    lines: Line[] = []


    canvas: HTMLCanvasElement
    updateUi: () => void

    addLine(newLine: Line) {
        this.lines.push(newLine)
    }

    removeLine(removedLine: Line) { 
        this.lines = this.lines.filter(line => line.id !== removedLine.id)
        this.updateUi()
    }

    addPoint(newPoint: Point) {
        // Theres more than one point already drawn so draw a line that connected the closest point to the newPoint were adding.
        if (this.points.length > 0) {
            // Create a line with the new point and the point closest to the new point
            const closestPoint = this.getClosestPoint(newPoint)
            this.addLine(new Line(newPoint, closestPoint))
        }

        this.points.push(newPoint)
        this.updateUi()
    }

    listeners() {
        this.canvas.addEventListener("click", (event) => {
            this.addPoint(new Point(event.x, event.y))
        })
    }


    /**
     * 2/21/25 5:28pm
     * @link https://socratic.org/questions/59107ac4b72cff7430f3e681
     * @description find the closest point to the given point
     * @param {Point} startingPoint point that we want to find another point that closest to it
     * @returns {Point} 
     */
    getClosestPoint(startingPoint: Point): Point {
        return this.points.sort((pointA, pointB) => {
            const pointADistance = Math.sqrt(Math.pow(startingPoint.x - pointA.x, 2) + Math.pow(startingPoint.y - pointA.y, 2))
            const pointBDistance = Math.sqrt(Math.pow(startingPoint.x - pointB.x, 2) + Math.pow(startingPoint.y - pointB.y, 2))

            if (pointADistance < pointBDistance) return -1
            return 0
        })[0]

    }

    removePoint(removedPoint: Point) {
        this.points = this.points.filter(points => points.id !== removedPoint.id)
        this.updateUi()
    }

}