import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  height: 10vh;
  width: 100vw;
  color: #31ce56;
  background-color: #080e20;
  font-family: monospace;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.h1`
  display: block;
  font-size: 2.3rem;
  text-decoration: none !important;
  color: hotpink;
  transition: 0.3s;

  & :hover {
    transition: 0.3s;
    transform: scale(1.08);
    color: coral;
  }
`;

export const LogoLink = styled(ReactRouterLink)`
  font-size: 2.3rem;
  color: #31ce56;
  text-decoration: none;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-around;
`;

export const Links = styled.div`
  font-family: monospace;
  font-size: 1.3rem;
  text-decoration: none;
  color: orchid;
  transition: 0.3s;

  & :hover {
    color: coral;
    transition: 0.3s;
    transform: scale(1.2);
  }
`;

export const LinksRoute = styled(ReactRouterLink)`
  display: block;
  text-decoration: none;
  transition: 0.3s;
`;
