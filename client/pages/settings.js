import Head from "next/head";
import SettingsContainer from "../containers/SettingsContainer";
import Navbar from "../components/navbar";

const settings = () => {
 return (
  <div>
   <Head>
    <title>Setting : Vimgore</title>
    <meta name="description" content="Settings for vimgore" />
   </Head>
   <Navbar />
   <SettingsContainer />
  </div>
 );
};

export default settings;
