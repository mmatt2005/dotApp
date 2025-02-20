import { PointWrapper } from "./pointWrapper.js";
// The width of the ui in pixels
const UI_WIDTH = 400;
export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        canvas.width = window.innerWidth - UI_WIDTH;
        canvas.height = window.innerHeight;
        this.pointWrapper = new PointWrapper(this.canvas, this.updateUi.bind(this));
        this.pointWrapper.listeners(); // Start the event listeners needed for points
        this.loop();
    }
    /**
     * @description called from other methods in the game code to trigger a ui update on the frontend
     */
    updateUi() {
        this.onUiUpdate(this);
    }
    /**
     * @description triggered by updateUi() being called. Returns the newGameObject to the frontend ui.
     *
     * @param {Game} newGameObject
     */
    onUiUpdate(newGameObject) { }
    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        window.requestAnimationFrame(() => this.loop());
    }
    /**
     * @description re draws the whole game canvas
     */
    draw() {
        this.pointWrapper.points.forEach(point => point.draw(this.context));
    }
}
