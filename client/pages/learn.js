import styles from "../styles/Home.module.css";
import { Learn, Navbar } from "../containers";

export default function Home() {
 return (
  <div className={styles.container}>
   <Navbar />
   <Learn />
  </div>
 );
}
