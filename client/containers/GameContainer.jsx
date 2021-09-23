import dynamic from "next/dynamic";
const VimEditor = dynamic(import("../components/editor"), { ssr: false });

const GameArea = () => {
 return (
  <>
   <VimEditor />
  </>
 );
};

export default GameArea;
