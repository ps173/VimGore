const gameAreaInfo = ({ children }) => {
  return <div>{children}</div>;
};

gameAreaInfo.FlexContainer = ({ children }) => {
  return (
    <div className="flex flex-row m-4 bg-gradient-to-br from-pink-800 via-indigo-800 to-purple-800 rounded-md">
      {children}
    </div>
  );
};

gameAreaInfo.Box = ({ children }) => {
  return (
    <div className="bg-gray-800 w-full h-9/13 m-3 flex flex-col justify-center align-baseline rounded-md">
      {children}
    </div>
  );
};

gameAreaInfo.Text = ({ children }) => {
  return (
    <div className="text-justify text-blue-500 p-3 text-lg mx-4 my-1 w-7/12">
      {children}
    </div>
  );
};

gameAreaInfo.Code = ({ children }) => {
  return (
    <div className="text-justify font-mono text-green-500 bg-gray-900 m-4 p-4">
      {children}
    </div>
  );
};

gameAreaInfo.HugeText = ({ children }) => {
  return (
    <div className="text-center text-2xl text-pink-500  p-4">{children}</div>
  );
};

export default gameAreaInfo;
