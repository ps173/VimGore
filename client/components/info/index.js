import "react";
import InfoStyles from "../../styles/Infostyle.module.css";
import Link from "next/link";

export default function Info({ children, ...restprops }) {
 return (
  <div className={InfoStyles.Container} {...restprops}>
   {children}
  </div>
 );
}

Info.Title = function InfoTitle({ ...restprops }) {
 return (
  <div className={InfoStyles.Title} {...restprops}>
   VimGore
  </div>
 );
};

Info.Text = function InfoText({ children, ...restprops }) {
 return (
  <div className={InfoStyles.TextContainer} {...restprops}>
   {children}
  </div>
 );
};

Info.LocalLinks = function InfoLocalLinks({ children, ...restprops }) {
 return (
  <Link {...restprops}>
   <a className={InfoStyles.Links}>
    {children}
   </a>
  </Link>
 );
};

Info.GlobalLinks = function InfoGlobalLinks({ children, ...restprops }) {
 return (
  <a className={InfoStyles.Links}>
   {children}
  </a>
 );
};
