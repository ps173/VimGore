import Head from "next/head";
import styles from "../styles/Home.module.css";
import { About } from "../containers";
import { Navbar } from "../components";

export default function Home() {
 return (
  <div className={styles.container}>
   <Head>
    <title>About : Vimgore</title>
    <meta
     name="description"
     content="About vimgore. Check out on github too."
    />
   </Head>
   <Navbar />
   <About />
  </div>
 );
}
