import { GeometryWrapper } from "./geometry/geometryWrapper.js"
import { Point } from "./geometry/point.js"

// The width of the ui in pixels
const UI_WIDTH = 400


export class Game {
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")!

        canvas.width = window.innerWidth - UI_WIDTH
        canvas.height = window.innerHeight



        this.geometryWrapper = new GeometryWrapper(this.canvas, this.updateUi.bind(this))
        this.geometryWrapper.listeners() // Start the event listeners needed for points

        this.loop()
    }
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    geometryWrapper: GeometryWrapper

    
    /** 
     * @description called from other methods in the game code to trigger a ui update on the frontend
     */
    updateUi() {
        this.onUiUpdate(this)
    }

    /**
     * @description triggered by updateUi() being called. Returns the newGameObject to the frontend ui.
     *
     * @param {Game} newGameObject 
     */
    onUiUpdate(newGameObject: Game) {} 



    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.draw()

        window.requestAnimationFrame(() => this.loop())
    }

    /** 
     * @description re draws the whole game canvas
     */
    draw() {
        this.geometryWrapper.points.forEach(point => point.draw(this.context))
        this.geometryWrapper.lines.forEach(line => line.draw(this.context))
    }
}



