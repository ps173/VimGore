import React, {useState,useEffect,useContext,useRef} from "react"
import CodeMirror from '@uiw/react-codemirror'
import ApiContext from './ApiContext'
import '../App.css'
import 'codemirror/keymap/vim'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/gruvbox-dark.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/material-ocean.css'

function Editor(){
  const {snippets,setGlobalScore} = useContext(ApiContext);
  const [value,setValue] = useState("")
  const [answer,setAnswer] = useState("")
  const [vimmode,setVimMode] = useState("Normal")
  const [keyCounts,setKeyCounts] = useState(0)
  const [score,setScore] = useState(0)
  const [checkAnswer,setCheckAnswer] = useState(false)
  const notifRef = useRef()

  useEffect(()=>{
    console.log(snippets)
    setValue(snippets.code)
    setAnswer(snippets.answer)
    setCheckAnswer(false)
    setScore(0)
    setKeyCounts(0)
  },[snippets])
 
  const closeNotification = (e) =>{
    notifRef.current.classList.add("hidden")
  }

  const handleMode = (e) => {

    // Checking For vim mode
    if (e.state.vim.insertMode===false && e.state.vim.visualMode===false){
      setVimMode("Normal")
    }
    else if (e.state.vim.visualMode===true && e.state.vim.insertMode===false){
      setVimMode("Visual")
    }
    else{
      setVimMode("Insert")
    }
  }

  // Checking the input with anwer
  useEffect(()=>{
    if (keyCounts <= snippets.minKeyStrokes){
      setScore(5)
      setGlobalScore(prev=>prev + score)
      setKeyCounts(0)
    }
    else {
      setScore(1)
      setGlobalScore(prev=>prev+score)
      setKeyCounts(0)
    }
  },[checkAnswer])

  const handleKeypress = (e) => {
    let codeVal = e.getValue()
    console.log(snippets.answer);
    setKeyCounts(prev=>prev+1) 
    if ( codeVal.trim() == answer.trim()){
      setCheckAnswer(true)
    }
    if ( codeVal.trim() !== answer.trim()){
      setCheckAnswer(false)
    }
  }

  const option = {
   theme: 'dracula',
   keyMap: 'vim', // the vim key binds
   mode: snippets.language ,
   smartIndent:true,
   tabSize:true,
   autofocus:true
  }

  return(
    <div className='editor'>
      <pre className='score'>{checkAnswer ? `Score : +${score}` : ""}</pre>
      <pre className='keystroke-number'>{checkAnswer ? "Great Job You Did It :)" : `Keys-Pressed : ${keyCounts}`}</pre>
      <CodeMirror
       value={value}
       options={option}
       onKeyHandled={(e)=> handleMode(e)}
       onKeypress={(e)=> handleKeypress(e)}
      />
      <pre className="command-bar">{vimmode}</pre>
      <div className="common-keys-bar" ref={notifRef}> 
        <p>
        Since you are using a mobile device we recommend using a keyboard that has special keys 
        </p>
        <button onClick={closeNotification}> X </button>
      </div>
    </div>
    )
}

export default Editor
