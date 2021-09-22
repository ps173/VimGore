import { useEffect, useState } from "react";
import { Editor, Info } from "../components";

const GameContainer = () => {
 const [state, setState] = useState("console.log('yo')");
 const [vimMode, setVimMode] = useState("Normal");
 const handleChange = (val, e) => {
  setState(val);
  console.log(e);
 };

 const handleCursorActivity = (e) => {
  console.log(e);
 };

 useEffect(() => {
  console.log(vimMode);
 }, [vimMode]);

 return (
  <>
   <Editor
    doc={state}
    onChange={handleChange}
    onCursorActivit={handleCursorActivity}
   />
   <Info.FlexContainer>
    <Info.Container>
     <Info.Text>Some Text Will Go here. Idk change to below :</Info.Text>
     <br />
     <Info.Code>console.log("Hellow World!")</Info.Code>
    </Info.Container>
    <Info.Container>
    </Info.Container>
   </Info.FlexContainer>
  </>
 );
};

export default GameContainer;
