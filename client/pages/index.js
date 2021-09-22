import styles from "../styles/Home.module.css";
import { Navbar } from "../components";
import { GameContainer } from "../containers";

export default function Home() {
 return (
  <div className={styles.container}>
   <Navbar />
   <GameContainer />
  </div>
 );
}
