import React from "react";
import {
  Navbar,
  Container,
  Links,
  LinksContainer,
  Logo,
} from "./styles/header";

export default function Header({ children, ...restprops }) {
  return <Navbar {...restprops}>{children}</Navbar>;
}

Header.Container = function HeaderContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...restprops }) {
  return <Logo {...restprops}>{children}</Logo>;
};

Header.LinksContainer = function HeaderLinksContainer({
  children,
  ...restprops
}) {
  return <LinksContainer {...restprops}>{children}</LinksContainer>;
};

Header.Links = function HeaderLinks({ children, ...restprops }) {
  return <Links {...restprops}>{children}</Links>;
};
