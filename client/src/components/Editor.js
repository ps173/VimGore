import React, {useState,useEffect,useContext,useRef} from "react"
import CodeMirror from '@uiw/react-codemirror'
import ApiContext from './ApiContext'
import Select from 'react-select'
import '../App.css'
import 'codemirror/keymap/vim'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/gruvbox-dark.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/material-ocean.css'

function Editor(){

  const options = [
  { value: 'neo', label: 'Neo (Light)' },
  { value: 'ayu-mirage', label: 'Ayu-Mirage' },
  { value: 'dracula', label: 'Dracula' },
  { value: 'gruvbox-dark', label: 'Gruvbox' },
  { value: 'material-ocean', label: 'Material-Ocean' }
]


  const {snippets,setGlobalScore} = useContext(ApiContext);

  
  const [value,setValue] = useState("")
  const [answer,setAnswer] = useState("")
  const [theme,setTheme] = useState("dracula")
  const [vimmode,setVimMode] = useState("Normal")
  const [keyCounts,setKeyCounts] = useState(0)
  const [score,setScore] = useState(0)
  const [checkAnswer,setCheckAnswer] = useState(false)

  const notifRef = useRef()


  useEffect(()=>{
    setValue(snippets.code)
    setAnswer(snippets.answer)
    setCheckAnswer(false)
    setScore(0)
    setKeyCounts(0)
    console.log(snippets.code , snippets.answer)
  },[snippets])
 

  const closeNotification = (e) =>{
    notifRef.current.classList.add("hidden")
  }

  // Checking For vim mode
  const handleMode = (e) => {

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

  // Incrementing the score
  useEffect(()=>{
    if (checkAnswer == true && keyCounts <= snippets.minKeyCounts) {
        setScore(5)
        setGlobalScore(prev => prev + score)
    }
    else {
        setScore(1)
        setGlobalScore(prev => prev + score)
    }

  },[checkAnswer])

  // Checking the input with keycounts
  useEffect(()=>{
    let codeVal = value
    if ( codeVal.trim() == snippets.answer.trim()){
      setCheckAnswer(true)
    }
    if ( codeVal.trim() !== snippets.answer.trim()){
      setCheckAnswer(false)
    }

  },[keyCounts])

  const handleKeypress = (e) => {
    let codeVal = e.getValue()
    setValue(codeVal)
    setKeyCounts(prev=>prev+1) 
  }

  const handleSelectChange = (e) => {
    setTheme(e.value)
  }

const customStyles = {
}

  const option = {
   theme: theme,
   keyMap: 'vim', // the vim key binds
   mode: snippets.language ,
   smartIndent:true,
   tabSize:true,
   autofocus:true
  }

  return(
    <div className='editor'>
      <label className='label-opt' for="colorscheme">Color-Scheme</label>
      <Select 
        id="colorscheme" 
        className="selector" 
        style={customStyles}
        options={options} 
        onChange={(e)=>handleSelectChange(e)}
        theme={ theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        neutral0 : '#5D5F68',
        neutral40 : '#ffffff',
        neutral20 : '#ffffff',
        neutral60 : '#ffffff',
        neutral70 : '#ffffff',
        neutral80 : '#ffffff',
        neutral90 : '#ffffff',
        primary: '#3CE',
      },
    })}
            />
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
