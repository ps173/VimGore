import React from "react";
import {
  Navbar,
  Container,
  Links,
  LinksContainer,
  Logo,
  LogoLink,
  LinksRoute,
} from "./styles/header";

export default function Header({ children, ...restprops }) {
  return <Navbar {...restprops}>{children}</Navbar>;
}

Header.Container = function HeaderContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, children, ...restprops }) {
  return (
    <LogoLink to={to} {...restprops}>
      <Logo>{children}</Logo>
    </LogoLink>
  );
};

Header.LinksContainer = function HeaderLinksContainer({
  children,
  ...restprops
}) {
  return <LinksContainer {...restprops}>{children}</LinksContainer>;
};

Header.Links = function HeaderLinks({ to, children, ...restprops }) {
  return (
    <>
      <LinksRoute to={to}>
        <Links {...restprops}>{children}</Links>
      </LinksRoute>
    </>
  );
};
