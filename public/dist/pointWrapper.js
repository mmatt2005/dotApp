import { GeometryWrapper } from "./geometry/geometryWrapper";
export class PointWrapper extends GeometryWrapper {
    constructor(canvas, updateUi) {
        super();
        this.points = [];
        this.canvas = canvas;
        this.updateUi = updateUi;
    }
}
