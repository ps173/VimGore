import styles from "../styles/Home.module.css";
import { Learn } from "../containers";
import { Navbar } from "../components";

export default function Home() {
 return (
  <div className={styles.container}>
   <Navbar />
   <Learn />
  </div>
 );
}
