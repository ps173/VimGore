import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Learn } from "../containers";
import { Navbar } from "../components";

export default function Home() {
 return (
  <div className={styles.container}>
   <Head>
    <title>Learn Vim : Vimgore</title>
    <meta
     name="description"
     content="Learn Vim and Other resources for help"
    />
   </Head>
   <Navbar />
   <Learn />
  </div>
 );
}
