import React from "react";
import { Container, Vimode, TextContainer, Text } from "./styles/gamearea";
import CodeMirror from "@uiw/react-codemirror"

export default function GameArea({ children, ...restprops }) {
    return <Container {...restprops}>{children}</Container>;
}

GameArea.Container = function GameAreaContainer({ children, ...restprops }) {
    return <Container {...restprops}>{children}</Container>;
};

GameArea.Score = function GameAreaScore({ children, ...restprops }) {
    return <Text> {children}</Text>;
};

GameArea.TextContainer = function GameAreaTextContainer({ children, ...restprops }) {
    return <TextContainer> {children}</TextContainer>;
};


GameArea.Keynumber = function GameAreaKeynumber({ children, ...restprops }) {
    return <Text> {children}</Text>;
};

GameArea.Vimode = function GameAreaScore({ children, ...restprops }) {
    return <Vimode {...restprops}>{children}</Vimode>;
};

GameArea.Editor = function GameAreaEditor({ ...restprops }) {
    return <CodeMirror {...restprops} />;
};
