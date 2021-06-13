import React from "react";
import {
  Container,
  Title,
  Text,
  Link,
  Break,
  ListContainer,
  ListItem,
} from "./styles/info";

export default function Info({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Info.Container = function InfoContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Info.Title = function InfoTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Info.Text = function InfoText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

Info.Link = function InfoLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};

Info.Break = function InfoBreak({ ...restprops }) {
  return <Break {...restprops} />;
};

Info.ListContainer = function InfoListContainer({ children, ...restprops }) {
  return <ListContainer {...restprops}>{children}</ListContainer>;
};

Info.ListItem = function InfoListItem({ children, ...restprops }) {
  return <ListItem {...restprops}>{children}</ListItem>;
};
