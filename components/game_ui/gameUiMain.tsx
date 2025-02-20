"use client"

import { Game } from "@/gameSrc/main"
import { Button } from "../ui/button"
import { Trash2Icon } from "lucide-react"
import { GameUi } from "@/app/page"

export default function GameUiMain({ game, ui } : {
    game: Game,
    ui: GameUi
}) { 
    return <div className="grow bg-card">
        {
            ui.points.map(point => <div key={point.id} className="">
                x: {point.x}
                y: {point.y}
                <Button onClick={() => { 
                    game.removePoint(point)
                }}><Trash2Icon/></Button>
            </div> )
        }

    </div>
}