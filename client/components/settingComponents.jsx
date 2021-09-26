const settingsComponents = ({ children }) => {
 return <div>{children}</div>;
};

settingsComponents.Container = ({ children }) => {
 return <div className="m-10 p-4 w-9/12">{children}</div>;
};

settingsComponents.FlexContainer = ({ children }) => {
 return <div className="flex flex-row my-8">{children}</div>;
};

settingsComponents.SaveButton = ({ restprops }) => {
 return (
  <div>
   <button
    className="bg-green-600 m-4 rounded-full text-white h-9 w-1/12 hover:bg-green-800"
    {...restprops}
   >
    Save
   </button>
  </div>
 );
};

export default settingsComponents;
