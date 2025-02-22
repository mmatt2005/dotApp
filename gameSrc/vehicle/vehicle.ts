import { Line } from "../geometry/line";
import { Point } from "../geometry/point";

export class Vehicle {
    constructor(line: Line) {
        this.line = line

        this.x = line.point1.x
        this.y = line.point1.y
    }

    /**
     * @description the current line the vehicle is on
     * @type {Line}
     */
    line: Line

    x: number
    y: number


    /**
     * @description size in both width & height
     */
    size: number = 12
    color: string = "red"
    borderRadius: number = 10
    speed: number = 1

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color
        context.beginPath();
        context.roundRect(this.x, this.y, this.size, this.size, this.borderRadius);
        context.fill();
    }


    moveTo(moveToPoint: Point) {
        const startPos = {
            // The x,y of the center of the vehicle instead of 0,0
            x: (this.x + (this.size / 2)),
            y: (this.y + (this.size / 2))
        }
        const dx = moveToPoint.getCenter().x - startPos.x
        const dy = moveToPoint.getCenter().y - startPos.y

        // Calculate the total distance to move
        const distance = Math.hypot(dx, dy)

        // Normalize the direction vector
        const dirX = dx / distance
        const dirY = dy / distance

        let moved = 0 // Track how much has been moved


        const animate = () => {
            if (moved >= distance) return // Stop when the target is reached

            // Move by a fixed number of pixels per frame
            this.x += dirX * this.speed
            this.y += dirY * this.speed
            moved += this.speed


            requestAnimationFrame(animate)
        }

        animate()
    }



}