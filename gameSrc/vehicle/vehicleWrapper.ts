import { GeometryWrapper } from "../geometry/geometryWrapper";
import { Line } from "../geometry/line";
import { Vehicle } from "./vehicle";

export class VehicleWrapper{ 
    constructor(lines: Line[]) {
        this.lines = lines
    }

    lines: Line[] 
    vehicles: Vehicle[] = []


    addVehicle(newVehicle: Vehicle) { 
        this.vehicles.push(newVehicle)
    }

    
    /** 
     * 2/21/25 6:19pm
     * @description spawns a vehicle on a random line
     */
    spawnVehicle() { 
        if (this.lines.length === 0) {
            console.log("Failed to spawn vehicle due to no lines to spawn on")
            return
        }

        const randomSpawnLine = this.lines[Math.floor(Math.random() * this.lines.length)]

        console.log(randomSpawnLine)

        const newVehicle = new Vehicle(randomSpawnLine)
        this.addVehicle(newVehicle)

        newVehicle.moveTo(randomSpawnLine.point2)
    }
}