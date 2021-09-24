const gameAreaInfo = ({ children }) => {
  return <div>{children}</div>;
};

gameAreaInfo.Grid = ({ children }) => {
  return <div className="grid grid-cols-3 w-screen p-2">{children}</div>;
};

gameAreaInfo.Container = ({ children }) => {
  // NOTE: 11/12 is approx 90% width which prevents the overflow
  return (
    <div className="grid col-span-1 grid-rows-3 w-11/12 rounded-md my-1">
      {children}
    </div>
  );
};

gameAreaInfo.Box = ({ children, flexgrow }) => {
  return (
    <div className="bg-gray-800 ring-4 ring-gray-600 w-full m-3 flex flex-col justify-center align-baseline rounded-md ">
      {children}
    </div>
  );
};

gameAreaInfo.ScoreContainer = ({ children }) => {
  return (
    <div className="bg-gray-800 ring-4 ring-gray-600 row-span-2 w-full h-4/5 m-3 flex flex-col justify-center align-middle rounded-md">
      {children}
    </div>
  );
};

gameAreaInfo.Text = ({ children }) => {
  return (
    <div className="text-justify text-blue-500 p-3 text-lg mx-4 my-1 w-9/12">
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

gameAreaInfo.HugeScoreText = ({ children }) => {
  return <div className="text-center text-2xl text-pink-500">{children}</div>;
};

export default gameAreaInfo;
