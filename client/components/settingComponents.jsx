const settingsComponents = ({ children }) => {
  return <div>{children}</div>;
};

settingsComponents.Container = ({ children }) => {
  return <div className="m-10 p-4 w-9/12">{children}</div>;
};

settingsComponents.FlexContainer = ({ children }) => {
  return <div className="flex flex-row my-8">{children}</div>;
};

// FIXME: dunno if this clean or not but maybe hard to read so
settingsComponents.Select = ({ array, selected, restprops }) => {
  return (
    <select
      {...restprops}
      className="select-auto text-purple-500 text-lg bg-transparent"
      name="Selection"
      id={"select-" + Math.random() * 100}
    >
      {array.map((value) => (
        <option id="value" key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

settingsComponents.SaveButton = ({ restprops }) => {
  return (
    <div>
      <button
        className="bg-green-600 m-4 rounded-full h-9 w-1/12 hover:bg-green-800"
        {...restprops}
      >
        Save
      </button>
    </div>
  );
};

export default settingsComponents;
