import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
// All the themes
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/material.css";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/the-matrix.css";
// ignore-eslint
import "codemirror/keymap/vim";
// All the languages
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/css/css";
import "codemirror/mode/rust/rust";
import "codemirror/mode/go/go";
import "codemirror/mode/clojure/clojure";
import "codemirror/mode/markdown/markdown";

const VimEditor = (
  { setKeystrokes, keystrokes, language, ...restProps },
) => {
  const [vimode, setVimode] = useState("Normal");

  const localtheme = localStorage.getItem("default-theme")
    ? localStorage.getItem("default-theme")
    : "material-palenight";

  // Note: Parse is basically to convert the stupid string to bool
  const localLineNumber = localStorage.getItem("linenumber")
    ? JSON.parse(localStorage.getItem("linenumber"))
    : false;

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

  const option = {
    theme: localtheme, // retrieve from localStorage if the theme exists
    mode: language,
    lineNumbers: localLineNumber,
    lineWrapping: false,
    keyMap: "vim",
  };

  return (
    <div className="col-span-2">
      <CodeMirror
        {...restProps}
        className="m-4 rounded-xl"
        options={option}
        onKeyHandled={(editor, _data, _value) => {
          handleVimode(editor);
          handleKeyStrokes();
        }}
      />
      <div
        className="m-4 p-2 flex flex-row justify-around align-middle  bg-gradient-to-r from-gray-800 via-indigo-800 to-indigo-900  rounded-md"
      >
        <div className="text-xl px-5 font-bold text-red-500">{vimode}</div>
        {keystrokes
          ? <div className="text-xl px-5 font-bold text-green-500">
            Keystrokes : {keystrokes}
          </div>
          : " "}
        <div className="text-xl px-5 font-bold text-red-500">{language}</div>
      </div>
    </div>
  );
};

export default VimEditor;
