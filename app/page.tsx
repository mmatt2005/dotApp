"use client"
import GameUiMain from "@/components/game_ui/gameUiMain";
import { useEffect, useRef, useState } from "react";
import { GameUi } from "@/lib/types";
import { Game } from "@/public/dist/main";


export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // This is immutable NEVER update this state
  const [game, setGame] = useState<Game | null>(null)

  const [gameUi, setGameUi] = useState<GameUi | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const game = new Game(canvasRef.current)


      setGame(game)
      setGameUi(game)

      game.onUiUpdate = (updateUi) => {
        setGameUi({...updateUi})
      }
    }
  }, [])

  return (
    <div className="flex">
      <canvas ref={canvasRef} />
      {game && gameUi && <GameUiMain game={game} ui={gameUi} />}
    </div>
  );
}
