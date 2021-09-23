import { useState } from "react";
import { GameAreaInfo } from "../components";
import dynamic from "next/dynamic";
const VimEditor = dynamic(import("../components/editor"), { ssr: false });

const GameArea = () => {
  const [code, setCode] = useState(`console.log("somethinghere")`);
  const [keystrokes, setKeystrokes] = useState(0);

  return (
    <>
      <VimEditor
        value={code}
        setKeystrokes={setKeystrokes}
        keystrokes={keystrokes}
      />
      <GameAreaInfo.FlexContainer>
        <GameAreaInfo.Box>
          <GameAreaInfo.Text>
            change the above to text to snippet given below
          </GameAreaInfo.Text>
          <GameAreaInfo.Code>console.log("something here")</GameAreaInfo.Code>
        </GameAreaInfo.Box>
        <GameAreaInfo.Box>
          <GameAreaInfo.HugeText>
            Keystrokes required to change : 3
          </GameAreaInfo.HugeText>
          <GameAreaInfo.HugeText>Global Score : 12</GameAreaInfo.HugeText>
        </GameAreaInfo.Box>
      </GameAreaInfo.FlexContainer>
    </>
  );
};

export default GameArea;
