import { v4 as uuidv4 } from "uuid";
export class Point {
    constructor(x, y) {
        /**
         * @description size in both width & height
         * @type {number}
         */
        this.size = 18;
        this.borderRadius = 0;
        this.color = "black";
        this.x = x;
        this.y = y;
        this.id = uuidv4();
    }
    /**
     * 2/20/25 2:45
     * @description updates the point style attributes (borderRadius, color...)
     * @param {keyof PointStyles} attribute the attribute to update (borderRadius, color...)
     * @param {PointStyles[typeof attribute]} newStyle the new value for this attribute
     */
    updateStyle(attribute, newStyle) {
        this[attribute] = newStyle;
    }
    /**
     * @description gets the center of the point
     * @returns {{ x: number; y: number; }} center (x,y) of the point
     */
    getCenter() {
        return {
            x: this.x + (this.size / 2),
            y: this.y + (this.size / 2)
        };
    }
    /**
     * @description draws the point to the canvas
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.roundRect(this.x, this.y, this.size, this.size, this.borderRadius);
        context.fill();
    }
}
