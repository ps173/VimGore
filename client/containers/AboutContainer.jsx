import { Info } from "../components";

export default function AboutContainer() {
 return (
  <Info>
   <Info.Title>About Vimgore</Info.Title>
   <Info.Container>
    <Info.Text>
     Vimgore started as a fun personal project that I wanted to build. It
     was inspired from the vimgolf challanges but I wanted a bit less
     harder and faster challenge approach. Hence I came with Vimgore.

     Here Are Some Faqs:

     <Info.Question>What does vimgore means ?</Info.Question>
     I dunno I was searching for a cool name. Vimgore goes good in my
     opinion of coolness so I don't mind
     <Info.Question>What editor does this site use ?</Info.Question>
     The Editor is your beloved{" "}
     <Info.GlobalLinks href="https://codemirror.net/">
      CodeMirror
     </Info.GlobalLinks>

     <Info.Question>Is this on github ?</Info.Question>
     Of Course. Vimgore is totally open source. Check it out
     <Info.GlobalLinks href="https://github.com/ps173/vimgore">
      here.
     </Info.GlobalLinks>
    </Info.Text>
   </Info.Container>
   <Info.EmptyArea />
   <Info.EmptyArea />
   <Info.Title>Personal Advertising</Info.Title>
   <Info.Container>
    <Info.EmptyArea />
    <Info.Text>
     Yea That's All For Faqs. If you like the project support by giving it
     a star on github. You can contact me via{" "}
     <Info.UL>
      <li>
       <Info.GlobalLinks>mail</Info.GlobalLinks>
      </li>
      <li>
       <Info.GlobalLinks>telegram</Info.GlobalLinks>
      </li>
      <li>
       <Info.GlobalLinks>instagram</Info.GlobalLinks>
      </li>
      <li>
       <Info.GlobalLinks>twitter</Info.GlobalLinks>
      </li>
     </Info.UL>
    </Info.Text>
   </Info.Container>
  </Info>
 );
}
