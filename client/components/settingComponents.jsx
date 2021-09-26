const settingsComponents = ({ children }) => {
 return <div>{children}</div>;
};

settingsComponents.Container = ({ children }) => {
 return <div className="m-10 p-4 w-9/12">{children}</div>;
};

settingsComponents.FlexContainer = ({ children }) => {
 return <div className="flex flex-row my-8">{children}</div>;
};

settingsComponents.Button = ({ text, onClick }) => (
 <button
  className={text
   ? "p-4 w-1/6 bg-green-500 hover:bg-green-600 rounded-full"
   : "p-4 w-1/6 bg-red-500 hover:bg-red-600 rounded-full"}
  onClick={onClick}
 >
  {`${text}`}
 </button>
);

export default settingsComponents;
