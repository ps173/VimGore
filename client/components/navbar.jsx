import "react";
import NavStyles from "../styles/Navbar.module.css";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
 const NavbarTitle = () => {
  return (
   <div
    className="px-4 text-xl md:text-3xl lg:text-5xl text-purple-600 font-mono font-bold"
   >
    <Link href="/">VimGore</Link>
   </div>
  );
 };

 const NavbarLinkContainer = ({ children }) => {
  return <div className="flex flex-row px-1 lg:px-10 md:px-10">
   {children}
  </div>;
 };

 const NavbarLinks = ({ children, href }) => {
  return (
   <Link href={href}>
    <a
     className="text-pink-400 font-mono font-medium text-base lg:text-xl px-5"
    >
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
    <NavbarLinks href="/settings">
     <FiSettings />
    </NavbarLinks>
   </NavbarLinkContainer>
  </div>
 );
};

export default Navbar;
