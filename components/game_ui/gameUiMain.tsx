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

    return <div className="grow bg-card">
        {
            game.points.map(point => <div key={point.id} className="bg-card p-4 my-4">
                x: {point.x}
                y: {point.y}
                <Button onClick={() => {
                    game.removePoint(point)
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

    </div>
}