import { useEffect, useState } from "react";
import { GameAreaInfo } from "../components";
import dynamic from "next/dynamic";
const VimEditor = dynamic(import("../components/editor"), { ssr: false });
const DisplayEditor = dynamic(import("../components/display-editor"), {
 ssr: false,
});
import _config_ from "../_config_";

const GameArea = () => {
 const [code, setCode] = useState(`console.log("somethinghere")`);
 const [answer, setAnswer] = useState(`console.log("something here")`);
 const [keystrokes, setKeystrokes] = useState(0);
 const [language, setLanguage] = useState("javascript");
 const [globalScore, setGlobalScore] = useState(0);
 const [reqkeystrokes, setReqKeystrokes] = useState(0);
 const APIPATH = _config_.API_PATH;

 const fetchData = () => {
  fetch(APIPATH)
   .then((response) => response.json())
   .then((data) => {
    setCode(data.code);
    setAnswer(data.answer);
    setReqKeystrokes(data.minKeyStrokes);
    setLanguage(data.language);
   });
 };

 // NOTE: Somehow this fixes everything
 const handleChange = (_e, _d, val) => {
  if (val.trim() == answer.trim()) {
   if (keystrokes <= reqkeystrokes) {
    setGlobalScore((prev) => prev + 5);
   } else {
    setGlobalScore((prev) => prev + 1);
   }
   setKeystrokes(0);
  }
 };

 // Change Question Everytime You have a correct answer
 useEffect(() => {
  fetchData();
 }, [globalScore]);

 // FetchData for first time
 useEffect(() => {
  fetchData();
 }, []);

 return (
  <>
   <GameAreaInfo.Grid>
    <VimEditor
     value={code}
     onChange={handleChange}
     setKeystrokes={setKeystrokes}
     keystrokes={keystrokes}
     language={language}
    />
    <GameAreaInfo.Container>
     <GameAreaInfo.Box>
      <GameAreaInfo.Text>
       change the above to text to snippet given below
      </GameAreaInfo.Text>
      <DisplayEditor
       className="code-display"
       value={answer}
       language={language}
      />
     </GameAreaInfo.Box>
     <GameAreaInfo.ScoreContainer>
      <GameAreaInfo.HugeScoreText>
       Keystrokes required to change : {reqkeystrokes}
      </GameAreaInfo.HugeScoreText>
      <GameAreaInfo.HugeScoreText>
       Global Score : {globalScore}
      </GameAreaInfo.HugeScoreText>
     </GameAreaInfo.ScoreContainer>
    </GameAreaInfo.Container>
   </GameAreaInfo.Grid>
  </>
 );
};

export default GameArea;
