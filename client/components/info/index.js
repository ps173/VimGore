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

Info.Container = function InfoContainer({ children, ...restprops }) {
 return (
  <div className={InfoStyles.Container} {...restprops}>
   {children}
  </div>
 );
};

Info.Title = function InfoTitle({ children, ...restprops }) {
 return (
  <h1 className={InfoStyles.Title} {...restprops}>
   {children}
  </h1>
 );
};

Info.Text = function InfoText({ children, ...restprops }) {
 return (
  <div className={InfoStyles.TextContainer} {...restprops}>
   {children}
  </div>
 );
};

Info.UL = function InfoUL({ children, ...restprops }) {
 return (
  <ul className={InfoStyles.Ul} {...restprops}>
   {children}
  </ul>
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
  <a className={InfoStyles.Links} target="_blank" {...restprops}>
   {children}
  </a>
 );
};
