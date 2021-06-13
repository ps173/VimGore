import React from "react";
import { Container, Title, Text, Link, Break } from "../info-page/styles/info";

export default function Faqs({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Faqs.Container = function FaqContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Faqs.Title = function FaqTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Faqs.Text = function FaqText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

Faqs.Link = function FaqLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};

Faqs.Break = function FaqBreak({ ...restprops }) {
  return <Break {...restprops} />;
};
