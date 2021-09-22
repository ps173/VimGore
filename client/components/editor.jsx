import dynamic from "next/dynamic";
import "codemirror/lib/codemirror.css";

// Don't ask me why I am doing this
// FIXME:: If anyone has better method of doing imports from codemirror
const CodeMirror = dynamic(
 () => {
  import("codemirror/mode/javascript/javascript");
  import("codemirror/keymap/vim");
  import("codemirror/theme/material-palenight.css");
  return import("react-codemirror");
 },
 { ssr: false },
);

export const Editor = ({ doc, onChange, onCursorActivity }) => {
 const options = {
  lineNumbers: true,
  mode: "javascript",
  keyMap: "vim",
  theme: "material-palenight",
 };

 return (
  CodeMirror &&
  <div>
   <CodeMirror
    options={options}
    value={doc}
    onChange={onChange}
    onCursorActivity={onCursorActivity}
    className="m-4 rounded-xl p-1"
   />
  </div>
 );
};

export default Editor;
