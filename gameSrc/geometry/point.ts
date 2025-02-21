import {v4 as uuidv4} from "uuid"

export type PointStyles = Partial<Pick<Point, 'size' | 'borderRadius' | 'color'>>
export class Point {
    constructor(x: number, y: number) {
        this.x = x
        this.y = y

        this.id = uuidv4()
    }
    x: number
    y: number
    id: string
    
    /**
     * @description size in both width & height
     * @type {number}
     */
    size: number = 12
    borderRadius: number = 0
    color: string = "black"

    
    /**
     * 2/20/25 2:45
     * @description updates the point style attributes (borderRadius, color...)
     * @param {keyof PointStyles} attribute the attribute to update (borderRadius, color...)
     * @param {PointStyles[typeof attribute]} newStyle the new value for this attribute
     */
    updateStyle(attribute: keyof PointStyles, newStyle: PointStyles[typeof attribute]) {
        (this[attribute] as typeof newStyle) = newStyle
    }

    
    /**
     * @description draws the point to the canvas
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color
        context.beginPath();
        context.roundRect(this.x, this.y, this.size, this.size, this.borderRadius);
        context.fill();
    }
}