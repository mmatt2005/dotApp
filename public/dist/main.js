import { Point } from "./point.js";
// The width of the ui in pixels
const UI_WIDTH = 400;
export class Game {
    constructor(canvas) {
        this.points = [];
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        canvas.width = window.innerWidth - UI_WIDTH;
        canvas.height = window.innerHeight;
        canvas.addEventListener("click", (event) => {
            this.addPoint(new Point(event.x, event.y));
        });
        this.loop();
    }
    addPoint(newPoint) {
        this.points.push(newPoint);
        this.updateUi(this);
    }
    removePoint(removedPoint) {
        this.points = this.points.filter(points => points.id !== removedPoint.id);
        this.updateUi(this);
    }
    /**
     * 2/19/25 8:59pm
     * @description updates the games ui with the most up to date game object
     */
    updateUi(newGameObject) { }
    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        window.requestAnimationFrame(() => this.loop());
    }
    /**
     * @description re draws the whole game canvas
     */
    draw() {
        this.points.forEach(point => point.draw(this.context));
    }
}
