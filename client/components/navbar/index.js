import "react";
import NavStyles from "../../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar({ children, ...restprops }) {
 return (
  <div className={NavStyles.Container} {...restprops}>
   {children}
  </div>
 );
}

Navbar.Title = function NavbarTitle({ ...restprops }) {
 return (
  <div className={NavStyles.Title} {...restprops}>
   VimGore
  </div>
 );
};

Navbar.LinkContainer = function NavbarContainer({ children, ...restprops }) {
 return (
  <div className={NavStyles.LinkContainer} {...restprops}>
   {children}
  </div>
 );
};

Navbar.Links = function NavbarLinks({ children, ...restprops }) {
 return (
  <Link {...restprops}>
   <a className={NavStyles.Links}>
    {children}
   </a>
  </Link>
 );
};
