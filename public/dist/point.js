import { v4 as uuidv4 } from "uuid";
export class Point {
    constructor(x, y) {
        /**
         * @description size in both width & height
         * @type {number}
         */
        this.size = 12;
        this.color = "black";
        this.x = x;
        this.y = y;
        this.id = uuidv4();
    }
    /**
     * @description draws the point to the canvas
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.roundRect(this.x, this.y, this.size, this.size, [3]);
        context.fill();
    }
}
