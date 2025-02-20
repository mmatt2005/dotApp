"use client"
import GameUiMain from "@/components/game_ui/gameUiMain";
import { Game } from "../public/dist/main";
import { useEffect, useRef, useState } from "react";

type RemoveMethods<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

export type GameUi = Omit<RemoveMethods<Game>, "canvas" | "context">;

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

      game.updateUi = (updateUi) => {
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
