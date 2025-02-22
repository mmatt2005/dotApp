"use client"

import { Game } from "@/gameSrc/main"
import { Button } from "../ui/button"
import { Trash2Icon } from "lucide-react"
import { GameUi } from "@/lib/types"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function GameUiMain({ game, ui }: {
    game: Game,
    ui: GameUi
}) {

    return <div className="grow bg-card max-h-screen overflow-y-auto">
        <Button
        onClick={() => { 
            game.vehicleWrapper.spawnVehicle()
        }}
        >Spawn Vehicle</Button>

        <Button
            onClick={() => { 
                game.vehicleWrapper.vehicles[0].moveTo(game.vehicleWrapper.vehicles[0].line.point1)
            }}
        >Move To other pt</Button>
        {
            game.geometryWrapper.points.map(point => <div key={point.id} className="bg-card p-4 my-4">
                Point

                x: {point.x}
                y: {point.y}
                <Button onClick={() => {
                    game.geometryWrapper.removePoint(point)
                }}><Trash2Icon /></Button>

                <div className="">
                    <Label>Radius</Label>
                    <Input type="number" min={0} defaultValue={point.borderRadius} onChange={(newValue) => {
                        point.updateStyle("borderRadius", Number(newValue.target.value))
                    }} />
                </div>


                <div className="">
                    <Label>Color</Label>
                    <Input defaultValue={point.color} onChange={(newValue) => {
                        point.updateStyle("color", newValue.target.value)
                    }} />
                </div>
            </div>)
        }

        {
            game.geometryWrapper.lines.map(line => <div key={line.id} className=" p-4 my-4">
                <div className="flex justify-between items-center">
                    <p>Line</p>
                    <Button
                        onClick={() => {
                            game.geometryWrapper.removeLine(line)
                        }}
                        className="ml-auto"
                        size={"icon"}
                    ><Trash2Icon /></Button>
                </div>

                <div className="flex gap-2">
                    <p>pt1: ({line.point1.x}, {line.point1.y}),</p>
                    <p>pt2: ({line.point2.x}, {line.point2.y})</p>
                </div>



                <div className="">
                    <Label>Color</Label>
                    <Input defaultValue={line.color} onChange={(newValue) => {
                        line.updateStyle("color", newValue.target.value)
                    }} />
                </div>
            </div>)
        }

    </div>
}