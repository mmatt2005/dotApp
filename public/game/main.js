import { Point } from "@src/point.js";
// The width of the ui in pixels
const UI_WIDTH = 400;
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth - UI_WIDTH;
canvas.height = window.innerHeight;
// canvas.style.backgroundColor = "black"
export class Game {
    constructor() {
        this.points = [];
    }
    addPoint(newNode) {
        this.points.push(newNode);
    }
    /**
     * @description re draws the whole game canvas
     */
    draw() {
        this.points.forEach(node => node.draw(context));
    }
}
export const game = new Game();
canvas.addEventListener("click", (event) => {
    game.addPoint(new Point(event.x, event.y));
});
function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.draw();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
