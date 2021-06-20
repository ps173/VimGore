import React, { useState, useEffect, useReducer } from "react";
import { GameArea } from "../components";
import 'codemirror/keymap/vim'
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/base16-light.css';
import * as Snippet from "../dummy_data.json"


export default function GameContainer() {
    // eslint-disable-next-line
    const [vimode, setVimode] = useState("Normal")
    const [value, setValue] = useState(Snippet[0].code)
    const [answer, setAnswer] = useReducer(Snippet[0].answer)
    const [keynum, setKeynum] = useState(0)
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(false)

    function grabNextSnppet() {
        setValue(Snippet[1].code)
        setAnswer(Snippet[1].answer)
    }

    function handleChange(e) {
        let currentVal = e.getValue()
        setValue(currentVal)

        // Check For Answer Here the answer will not update as the component will not re render
        if (answer === currentVal) {
            setCorrect(true)
        }
        else {
            setCorrect(false)
        }
    }

    function handleKeypress(e) {

        if (e.state.vim.insertMode === false && e.state.vim.visualMode === false) {
            setVimode("Normal")
        }
        else if (e.state.vim.visualBlock === true && e.state.vim.visualMode === true) {
            setVimode("Visual Block")
        }
        else if (e.state.vim.visualMode === true && e.state.vim.insertMode === false) {
            setVimode("Visual")
        }
        else {
            setVimode("Insert")
        }

        // Update keypresses 
        setKeynum(prev => prev + 1)
        console.log("answer", answer)

    }

    const option = {
        theme: 'material-palenight',
        keyMap: 'vim', // the vim key binds
        mode: 'jsx',
        smartIndent: true,
        tabSize: true,
        scrollbarStyle: null,
        autofocus: true
    }

    useEffect(() => {
        if (correct === true) {
            if (keynum <= Snippet[0].minKeyStrokes) {
                setKeynum(0)
                setScore(prev => prev + 1)
                grabNextSnppet()
            }
            else {
                setKeynum(0)
                setScore(prev => prev + 0)
                grabNextSnppet()
            }
        }
    }, [correct])

    return (
        <>
            <GameArea.Container>
                <GameArea.TextContainer>
                    <GameArea.Keynumber> Keys Pressed : {keynum} </GameArea.Keynumber>
                    <GameArea.Score> score : {score} </GameArea.Score>
                </GameArea.TextContainer>
                <GameArea.Editor
                    width="50vw"
                    height="50vh"
                    value={value}
                    options={option}
                    onChange={(e) => handleChange(e)}
                    onKeyHandled={(e) => handleKeypress(e)}
                />
                <GameArea.Vimode>{vimode}</GameArea.Vimode>
            </GameArea.Container>
        </>
    )
}

