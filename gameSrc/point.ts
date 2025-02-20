import {v4 as uuidv4} from "uuid"

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

    color: string = "black"

    
    /**
     * @description draws the point to the canvas
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color
        context.beginPath();
        context.roundRect(this.x, this.y, this.size, this.size, [3]);
        context.fill();
    }
}