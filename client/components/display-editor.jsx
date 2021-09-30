import React, { useEffect, useRef } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
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

const DisplayEditor = ({ language, ...restProps }) => {
 const localtheme = localStorage.getItem("default-theme")
  ? localStorage.getItem("default-theme")
  : "material-palenight";

 const option = {
  theme: localtheme, // retrieve from localStorage if the theme exists
  mode: language,
  lineNumbers: false,
  lineWrapping: true,
  readOnly: "nocursor",
  dragDrop: false,
  disableInput: true,
 };

 return (
  <div className="display-editor">
   <CodeMirror
    {...restProps}
    options={option}
   />
  </div>
 );
};

export default DisplayEditor;
