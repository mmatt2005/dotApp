export class Vehicle {
    constructor(line, vehicleWrapper) {
        /**
         * @description size in both width & height
         */
        this.size = 12;
        this.color = "red";
        this.borderRadius = 10;
        this.speed = 1;
        this.line = line;
        this.x = line.point1.x;
        this.y = line.point1.y;
        this.currentPoint = line.point1;
        this.vehicleWrapper = vehicleWrapper;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.roundRect(this.x, this.y, this.size, this.size, this.borderRadius);
        context.fill();
    }
    selectRandomMoveToPoint() {
        const availablePoints = this.vehicleWrapper.getConnectedPoints(this.currentPoint);
        return availablePoints[Math.floor(Math.random() * availablePoints.length)];
    }
    moveTo(moveToPoint) {
        const startPos = {
            // The x,y of the center of the vehicle instead of 0,0
            x: (this.x + (this.size / 2)),
            y: (this.y + (this.size / 2))
        };
        const dx = moveToPoint.getCenter().x - startPos.x;
        const dy = moveToPoint.getCenter().y - startPos.y;
        // Calculate the total distance to move
        const distance = Math.hypot(dx, dy);
        // Normalize the direction vector
        const dirX = dx / distance;
        const dirY = dy / distance;
        let moved = 0; // Track how much has been moved
        const animate = () => {
            if (moved >= distance) {
                this.currentPoint = moveToPoint;
                this.moveTo(this.selectRandomMoveToPoint());
                return;
            }
            // Move by a fixed number of pixels per frame
            this.x += dirX * this.speed;
            this.y += dirY * this.speed;
            moved += this.speed;
            requestAnimationFrame(animate);
        };
        animate();
    }
}
