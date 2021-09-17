import { Info } from "../components";

export default function AboutContainer() {
 return (
  <Info>
   <Info.Title>About Us</Info.Title>
   <Info.Container>
    <Info.Text>
     Vimgore started as a fun personal project that I wanted to build. It
     was inspired from the vimgolf challanges but I wanted a bit less
     harder and faster challenge approach. Hence I came with Vimgore.
     <Info.UL>
      <li>
       <Info.LocalLinks href="/learn">/learn</Info.LocalLinks>
      </li>
      <li>
       <Info.GlobalLinks href="https://moolenaar.net/habits.html">
        Habits Of Effective Text Editing
       </Info.GlobalLinks>
      </li>
      <li>
       <Info.GlobalLinks
        href="http://www2.geog.ucl.ac.uk/~plewis/teaching/unix/vimtutor"
       >
        Vim Tutor
       </Info.GlobalLinks>
      </li>
     </Info.UL>
    </Info.Text>
   </Info.Container>
  </Info>
 );
}
