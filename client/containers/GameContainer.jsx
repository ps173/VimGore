import { useState } from "react";
import { GameAreaInfo } from "../components";
import dynamic from "next/dynamic";
const VimEditor = dynamic(import("../components/editor"), { ssr: false });

const GameArea = () => {
  const [code, setCode] = useState("console.log('somethinghere')");

  return (
    <>
      <VimEditor value={code} />
      <GameAreaInfo />
    </>
  );
};

export default GameArea;
