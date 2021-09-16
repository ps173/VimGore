import styles from "../styles/Home.module.css";
import { Nav } from "../components";

export default function Home() {
 return (
  <div className={styles.container}>
   <Nav>
    <Nav.Title />
    <Nav.LinkContainer>
     <Nav.Links href="/">Home</Nav.Links>
     <Nav.Links href="/about">About</Nav.Links>
     <Nav.Links href="/learn">Learn</Nav.Links>
    </Nav.LinkContainer>
   </Nav>
   <div>I am a paragraph</div>
   <code>Some Code will be here</code>
  </div>
 );
}
