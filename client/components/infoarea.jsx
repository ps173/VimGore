import "react";
import Link from "next/link";

export default function Info({ children }) {
 return <div className="m-8">{children}</div>;
}

Info.Container = ({ children }) => {
 return <div className="p-2">
  {children}
 </div>;
};

Info.FlexContainer = ({ children }) => {
 // Add the children that Are themselves Container
 return (
  <div
   className="flex flex-row bg-gray-800 h-auto p-5 rounded-lg"
  >
   {children}
  </div>
 );
};

Info.MonoTitle = ({ children }) => {
 return (
  <h1
   className="font-bold font-mono text-3xl text-pink-500"
  >
   {children}
  </h1>
 );
};

Info.Title = ({ children }) => {
 return <h1 className="font-bold font-sans text-3xl text-purple-600 ">
  {children}
 </h1>;
};

Info.Text = ({ children }) => {
 return (
  <div
   className="font-sans font-normal text-purple-300 w-full text-lg "
  >
   {children}
  </div>
 );
};

Info.Header = ({ children }) => {
 return (
  <div className="text-justify p-4 text-green-400">
   {children}
  </div>
 );
};

Info.Question = ({ children }) => {
 return (
  <div className="text-justify py-2 text-blue-400">
   {children}
  </div>
 );
};

Info.EmptyArea = () => {
 return (
  <div className="h-6 bg-transparent"></div>
 );
};

Info.UL = ({ children }) => {
 return <ul className="list-disc m-3 p-3">{children}</ul>;
};

Info.LocalLinks = ({ children, href }) => {
 return (
  <Link href={href}>
   <a className="link text-indigo-400 m-1">{children}</a>
  </Link>
 );
};

Info.GlobalLinks = ({ children, href }) => {
 return (
  <a className="link text-indigo-400 m-1" target="_blank" href={href}>
   {children}
  </a>
 );
};

Info.Code = ({ children }) => {
 return <code className="m-1 p-5 text-green-500 bg-gray-900">{children}</code>;
};
