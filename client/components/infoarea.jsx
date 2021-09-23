import "react";
import Link from "next/link";

export default function Info({ children }) {
  return <div className="m-14">{children}</div>;
}

Info.Container = ({ children }) => {
  return <div className="p-2 w-10/12">{children}</div>;
};

Info.FlexContainer = ({ children }) => {
  // Add the children that Are themselves Container
  return (
    <div className="flex flex-row bg-gray-800 h-auto p-5 m-4 w-auto rounded-lg">
      {children}
    </div>
  );
};

Info.Title = ({ children }) => {
  return <h1 className="font-bold font-sans text-xl">{children}</h1>;
};

Info.Text = ({ children }) => {
  return (
    <div className="font-sans font-normal w-full text-base ">{children}</div>
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