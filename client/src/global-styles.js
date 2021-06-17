import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
	margin : 0px;
	box-sizing:border-box;
	padding : 0px;
}

body,html{
	background-color:#181a23;
	width:100vw;
	height:100vh;
	color : white;
	font-family: courier,monospace;
	overflow : hidden;
}

.CodeMirror-cursor{
    background-color: #A5A4A480 !important;
}

.CodeMirror-cursors{
    background-color: #A5A4A480 !important;
}

.cm-animate-fat-cursor{
    background-color: #A5A4A480 !important;
}

`;
