import styles from "../styles/Home.module.css";
import { Navbar } from "../containers";

export default function Home() {
 return (
  <div className={styles.container}>
   <Navbar />
   <h1 className="bg-red-50">Learn</h1>
   <code>Some Code will be here</code>
  </div>
 );
}
