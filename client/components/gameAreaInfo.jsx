const gameAreaInfo = ({ children }) => {
  return <div>{children}</div>;
};

gameAreaInfo.FlexContainer = ({ children }) => {
  return <div className="flex flex-row bg-gray-800 m-4">{children}</div>;
};

gameAreaInfo.Box = ({ children }) => {
  return <div className="bg-gray-900 w-full h-9/13 m-3">{children}</div>;
};

gameAreaInfo.Text = ({ children }) => {
  return (
    <div className="text-justify text-blue-500 p-5 m-4 text-base">
      {children}
    </div>
  );
};

gameAreaInfo.Code = ({ children }) => {
  return <code className="text-center text-green-500 px-3">{children}</code>;
};

gameAreaInfo.HugeText = ({ children }) => {
  return (
    <div className="text-center text-xl text-pink-500 p-4">{children}</div>
  );
};

export default gameAreaInfo;
