export class Point {
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    x: number
    y: number

    
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
        context.fillRect(this.x, this.y, this.size, this.size)
    }
}