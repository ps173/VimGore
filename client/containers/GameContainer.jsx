import { useEffect, useState } from "react";
import { GameAreaInfo } from "../components";
import dynamic from "next/dynamic";
const VimEditor = dynamic(import("../components/editor"), { ssr: false });
const DisplayEditor = dynamic(import("../components/display-editor"), {
 ssr: false,
});
import {
 RedditIcon,
 RedditShareButton,
 TelegramIcon,
 TelegramShareButton,
 TwitterIcon,
 TwitterShareButton,
} from "react-share";
import _config_ from "../_config_";

const GameArea = () => {
 const [vimode, setVimode] = useState("Normal");
 const [code, setCode] = useState(`console.log("somethinghere")`);
 const [answer, setAnswer] = useState(`console.log("something here")`);
 const [keystrokes, setKeystrokes] = useState(0);
 const [language, setLanguage] = useState("javascript");
 const [globalScore, setGlobalScore] = useState(0);
 const [reqkeystrokes, setReqKeystrokes] = useState(0);
 const APIPATH = _config_.API_PATH;
 const ScoreShareString =
  `Here Checkout Vimgore and score your vim efficency. My score was ${globalScore}`;

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

 // NOTE: Current ViMode
 const handleVimode = (editor) => {
  if (
   editor.state.vim.insertMode === false &&
   editor.state.vim.visualMode === false
  ) {
   setVimode("Normal");
  } else if (
   editor.state.vim.visualMode === true &&
   editor.state.vim.insertMode === false
  ) {
   setVimode("Visual");
  } else {
   setVimode("Insert");
  }
 };

 const handleKeyStrokes = () => {
  setKeystrokes((prev) => prev + 1);
 };

 // NOTE: Incrementing the score triggers the auto-changing
 const handleChange = (_e, _d, val) => {
  if (val == answer) {
   if (keystrokes <= reqkeystrokes) {
    setGlobalScore((prev) => prev + 5);
   }
   setGlobalScore((prev) => prev + 1);
   setKeystrokes(0);
  }
 };

 // NOTE: Change Question Everytime You have a correct answer
 useEffect(() => {
  fetchData();
 }, [globalScore]);

 // NOTE: FetchData for first time
 useEffect(() => {
  fetchData();
 }, []);

 return (
  <>
   <GameAreaInfo.Grid>
    <VimEditor
     value={code}
     onChange={handleChange}
     keystrokes={keystrokes}
     onKeyHandled={(editor, _data, _value) => {
      handleVimode(editor);
      handleKeyStrokes();
     }}
     vimode={vimode}
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
     <div className="flex flex-row justify-around">
      <div className="text-lg px-3 text-purple-100">Share Score :</div>
      <RedditShareButton
       url="https://vimgore.netlify.app"
       title={ScoreShareString}
      >
       <RedditIcon className="rounded-full mx-1 w-10 h-10" />
      </RedditShareButton>
      <TwitterShareButton
       url="https://vimgore.netlify.app"
       title={ScoreShareString}
      >
       <TwitterIcon className="rounded-full mx-1 w-10 h-10" />
      </TwitterShareButton>
      <TelegramShareButton
       url="https://vimgore.netlify.app"
       title={ScoreShareString}
      >
       <TelegramIcon className="rounded-full mx-1 w-10 h-10" />
      </TelegramShareButton>
     </div>
    </GameAreaInfo.Container>
   </GameAreaInfo.Grid>
  </>
 );
};

export default GameArea;
