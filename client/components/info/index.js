import "react";
// import InfoStyles from "../../styles/Infostyle.module.css";
import Link from "next/link";

export default function Info({ children, ...restprops }) {
 return (
  <div className="m-14" {...restprops}>
   {children}
  </div>
 );
}

Info.Container = function InfoContainer({ children, ...restprops }) {
 return (
  <div className="p-2 w-10/12" {...restprops}>
   {children}
  </div>
 );
};

Info.Title = function InfoTitle({ children, ...restprops }) {
 return (
  <h1 className="font-bold font-sans text-xl" {...restprops}>
   {children}
  </h1>
 );
};

Info.Text = function InfoText({ children, ...restprops }) {
 return (
  <div className="font-sans font-normal w-full text-base" {...restprops}>
   {children}
  </div>
 );
};

Info.UL = function InfoUL({ children, ...restprops }) {
 return (
  <ul className="list-disc m-3" {...restprops}>
   {children}
  </ul>
 );
};

Info.LocalLinks = function InfoLocalLinks({ children, ...restprops }) {
 return (
  <Link {...restprops}>
   <a className="link text-green-500">
    {children}
   </a>
  </Link>
 );
};

Info.GlobalLinks = function InfoGlobalLinks({ children, ...restprops }) {
 return (
  <a className="link text-green-500" target="_blank" {...restprops}>
   {children}
  </a>
 );
};
