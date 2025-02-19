"use client"

import { game } from "@/gameSrc/main"

export default function GameUiMain() { 
    
    return <div className="grow bg-card">
        {
            game.points.map(point => <div className="">
                {point.x}
                {point.y}
            </div> )
        }
    </div>
}