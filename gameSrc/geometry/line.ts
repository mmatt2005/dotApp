import { Point } from "./point";
import { v4 as uuidv4 } from "uuid"
export class Line {
    constructor(point1: Point, point2: Point) {
        this.point1 = point1
        this.point2 = point2
        this.id = uuidv4()
    }

    point1: Point
    point2: Point

    color: string = "black"
    id: string


    
    /**
     * @description updates the lines styles (color, size...)
     * @param {keyof Line} attribute the attribute to update (size, color)
     * @param {Line[typeof attribute]} newStyle the new value for the attribute (red, 26...)
     */
    updateStyle(attribute: keyof Line, newStyle: Line[typeof attribute]) {
        (this[attribute] as typeof newStyle) = newStyle
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath()



        /*
        Get the center of the point so we dont draw the line from (0,0) because it doesnt look good
        */
        const point1Center: Pick<Point, "x" | "y"> = {
            x: (this.point1.x + (this.point1.size / 2)),
            y: (this.point1.y + (this.point1.size / 2))
        }
        const point2Center: Pick<Point, "x" | "y"> = {
            x: (this.point2.x + (this.point2.size / 2)),
            y: (this.point2.y + (this.point2.size / 2))
        }

        context.moveTo(point1Center.x, point1Center.y)
        context.lineTo(point2Center.x, point2Center.y)

        context.stroke()
    }
}