import { Vehicle } from "./vehicle";
export class VehicleWrapper {
    constructor(lines) {
        this.vehicles = [];
        this.lines = lines;
    }
    addVehicle(newVehicle) {
        this.vehicles.push(newVehicle);
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
        console.log(randomSpawnLine);
        const newVehicle = new Vehicle(randomSpawnLine);
        this.addVehicle(newVehicle);
        newVehicle.moveTo(randomSpawnLine.point2);
    }
}
