import styles from "../styles/Home.module.css";
import { About, Navbar } from "../containers";

export default function Home() {
 return (
  <div className={styles.container}>
   <Navbar />
   <About />
  </div>
 );
}
