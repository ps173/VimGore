const settingsComponents = ({ children }) => {
 return <div>{children}</div>;
};

settingsComponents.Container = ({ children }) => {
 return <div className="m-5 w-10/12 lg:m-10 lg:p-4 lg:w-9/12">
  {children}
 </div>;
};

settingsComponents.FlexContainer = ({ children }) => {
 return <div className="flex flex-row my-8">{children}</div>;
};

settingsComponents.Button = ({ text, onClick }) => (
 <button
  className={text
   ? "md:p-4 lg:p-4 w-3/6 lg:w-1/6 bg-green-500 hover:bg-green-600 rounded-full"
   : "md:p-4 lg:p-4 w-3/6 lg:w-1/6 bg-red-500 hover:bg-red-600 rounded-full"}
  onClick={onClick}
 >
  {`${text}`}
 </button>
);

export default settingsComponents;
