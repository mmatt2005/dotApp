import GameUiMain from "@/components/game_ui/gameUiMain";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return <div className="">
    <canvas/>
    <GameUiMain/>
    <Script src="/game/main.js" strategy="afterInteractive"/>
  </div>
}
