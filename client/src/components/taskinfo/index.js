import React from "react";
import {Container, Text, Code} form "./styles/taskinfo.js"

export default function TaskInfo({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

TaskInfo.Container = function TaskInfoContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

TaskInfo.Text = function TaskInfoText(
  {children, ...restprops },
) {
  return <Text>{children}</Text>;
};

TaskInfo.Code = function TaskInfoCode(
  {children, ...restprops },
) {
  return <Code>{children}</Code>;
};

export default TaskInfo;
