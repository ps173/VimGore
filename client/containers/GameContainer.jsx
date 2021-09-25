import { useState } from "react";
import { GameAreaInfo } from "../components";
import Styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const VimEditor = dynamic(import("../components/editor"), { ssr: false });

const GameArea = () => {
  const [code, setCode] = useState(`console.log("somethinghere")`);
  const [keystrokes, setKeystrokes] = useState(0);

  return (
    <>
      <GameAreaInfo.Grid>
        <VimEditor
          value={code}
          setKeystrokes={setKeystrokes}
          keystrokes={keystrokes}
        />
        <GameAreaInfo.Container>
          <GameAreaInfo.Box flexgrow="flex-none">
            <GameAreaInfo.Text>
              change the above to text to snippet given below
            </GameAreaInfo.Text>
            <GameAreaInfo.Code>console.log("something here")</GameAreaInfo.Code>
          </GameAreaInfo.Box>
          <GameAreaInfo.ScoreContainer>
            <GameAreaInfo.HugeScoreText>
              Keystrokes required to change : 3
            </GameAreaInfo.HugeScoreText>
            <GameAreaInfo.HugeScoreText>
              Global Score : 12
            </GameAreaInfo.HugeScoreText>
          </GameAreaInfo.ScoreContainer>
        </GameAreaInfo.Container>
      </GameAreaInfo.Grid>
    </>
  );
};

export default GameArea;
