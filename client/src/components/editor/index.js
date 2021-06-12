import React from "react";
import { Container } from "./styles/editor";

export default function Editor({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Editor.Container = function EditorContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};
