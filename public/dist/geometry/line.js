import { v4 as uuidv4 } from "uuid";
export class Line {
    constructor(point1, point2) {
        this.color = "gray";
        this.width = 10;
        this.point1 = point1;
        this.point2 = point2;
        this.id = uuidv4();
        this.slope = this.calcSlope();
    }
    /**
     * @description updates the lines styles (color, size...)
     * @param {keyof Line} attribute the attribute to update (size, color)
     * @param {Line[typeof attribute]} newStyle the new value for the attribute (red, 26...)
     */
    updateStyle(attribute, newStyle) {
        this[attribute] = newStyle;
    }
    /**
     * @description calculates the slope of the line
     * @returns {number} the slope
     */
    calcSlope() {
        return ((this.point2.y - this.point1.y) / (this.point2.x - this.point1.x));
    }
    draw(context) {
        context.beginPath();
        /*
        Get the center of the point so we dont draw the line from (0,0) because it doesnt look good
        */
        const point1Center = {
            x: this.point1.getCenter().x,
            y: this.point1.getCenter().y
        };
        const point2Center = {
            x: this.point2.getCenter().x,
            y: this.point2.getCenter().y
        };
        context.moveTo(point1Center.x, point1Center.y);
        context.lineTo(point2Center.x, point2Center.y);
        context.strokeStyle = this.color;
        context.lineWidth = this.width;
        context.stroke();
    }
}
