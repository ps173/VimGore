import React, { Component, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/material.css";
import "codemirror/theme/material-palenight.css";
// ignore-eslint
import "codemirror/keymap/vim";
import "codemirror/mode/javascript/javascript";

const VimEditor = ({ value, setValue, setKeystrokes }) => {
  const [vimode, setVimode] = useState("Normal");
  const [cursorpos, setCursorpos] = useState({ x: 0, y: 0 });

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

  return (
    <div>
      <CodeMirror
        className="m-4"
        value={value}
        options={{
          theme: "material-palenight",
          mode: "javascript",
          lineNumbers: true,
          keyMap: "vim",
        }}
        onChange={() => {
          handleKeyStrokes();
        }}
        onKeyHandled={(editor, data, value) => {
          handleVimode(editor);
          handleKeyStrokes();
        }}
      />
      <div className="m-4 flex flex-row w-auto bg-gray-600 p-2">
        <div className="text-indigo-500 ">{vimode}</div>
      </div>
    </div>
  );
};

export default VimEditor;
