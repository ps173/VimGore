import React, {useState,useEffect,useContext} from "react"
import ApiContext from './ApiContext'
import "../App.css"

function TaskInfo() {
  const {snippets,globalScore} = useContext(ApiContext)
  const [answer,setAnswer] = useState()
  const [keystrokes,setKeystrokes] = useState()

  useEffect(()=>{
      setAnswer(snippets.answer)
      setKeystrokes(snippets.minKeyStrokes)
  },[snippets])

  return (
    <div className="task-info">
      <div> Change the snippet to : 
        <div className="code">
          {answer} 
        </div> 
      </div>
      <p> Change in : <b>{keystrokes} </b> keystrokes </p>
      <ul className="basic-keys-info">
        <li>press <b>ESC</b> to go in normal-mode</li>
        <li>press <b>I</b> to go in insert-mode i.e. to start editing</li>
        <li>Use <b>h (left), j(down) , k(up) and l(right)</b> to move</li>
        <li>Use <b>x</b> to delete</li>
        <li>Use <b>r</b> to replace</li>
      </ul>
      <div className="score-show">
          Total-Score : {globalScore}        
      </div>
    </div>
  );
}

export default TaskInfo;
