import { Vehicle } from "./vehicle";
export class VehicleWrapper {
    constructor(lines) {
        this.vehicles = [];
        this.lines = lines;
    }
    addVehicle(newVehicle) {
        this.vehicles.push(newVehicle);
    }
    getConnectedPoints(currentPoint) {
        const connectedPoints = [];
        const connectedLines = this.lines.filter(line => line.point1.id === currentPoint.id || line.point2.id === currentPoint.id);
        connectedLines.forEach(line => {
            if (line.point1.id !== currentPoint.id) {
                connectedPoints.push(line.point1);
            }
            else if (line.point2.id !== currentPoint.id) {
                connectedPoints.push(line.point2);
            }
        });
        return connectedPoints;
    }
    /**
     * 2/21/25 6:19pm
     * @description spawns a vehicle on a random line
     */
    spawnVehicle() {
        if (this.lines.length === 0) {
            console.log("Failed to spawn vehicle due to no lines to spawn on");
            return;
        }
        const randomSpawnLine = this.lines[Math.floor(Math.random() * this.lines.length)];
        const newVehicle = new Vehicle(randomSpawnLine, this);
        this.addVehicle(newVehicle);
        newVehicle.moveTo(randomSpawnLine.point2);
    }
}
