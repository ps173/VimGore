import "react";
import NavStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
 const NavbarTitle = () => {
  return (
   <div className={NavStyles.Title}>
    <Link href="/">
     VimGore
    </Link>
   </div>
  );
 };

 const NavbarLinkContainer = ({ children }) => {
  return (
   <div className="flex-initial px-10">
    {children}
   </div>
  );
 };

 const NavbarLinks = ({ children, href }) => {
  return (
   <Link href={href}>
    <a className="text-indigo-400 font-mono text-lg px-4">
     {children}
    </a>
   </Link>
  );
 };

 return (
  <div className={NavStyles.Container}>
   <NavbarTitle />
   <NavbarLinkContainer>
    <NavbarLinks href="/about">About</NavbarLinks>
    <NavbarLinks href="/learn">Learn</NavbarLinks>
   </NavbarLinkContainer>
  </div>
 );
};

export default Navbar;
