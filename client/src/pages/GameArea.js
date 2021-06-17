import React, { useState, useEffect } from "react";
import { GameArea } from "../components";
import 'codemirror/keymap/vim'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/material-palenight.css'
import * as Data from "../dummy_data.json"


export default function GameContainer() {
    // eslint-disable-next-line
    const [vimode, setVimode] = useState("Normal")
    const [value, setValue] = useState(Data[0].code)
    const [keynum, setKeynum] = useState(0)

    function handleChange(e) {
        console.log("logging")
        setValue(e.getValue())

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
        // Check For Answer 
        // Change score keypresses 

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
        console.log("YO")
    }, [])

    return (
        <>
            <GameArea.Container>
                <GameArea.TextContainer>
                    <GameArea.Keynumber> Keys Pressed : {keynum} </GameArea.Keynumber>
                    <GameArea.Score> score : 0 </GameArea.Score>
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
        ;
}
