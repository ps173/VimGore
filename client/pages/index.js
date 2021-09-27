import Head from "next/head";
import { Navbar } from "../components";
import { GameContainer } from "../containers";

export default function Home() {
 return (
  <div>
   <Head>
    <title>Vimgore</title>
    <meta
     name="description"
     content="Vimgore an Interactive Game to Learn Vim. Check out on github too."
    />
   </Head>
   <Navbar />
   <GameContainer />
  </div>
 );
}
