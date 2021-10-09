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
     opinion of coolness.
     <Info.Question>What editor does this site use ?</Info.Question>
     The Editor is your beloved{" "}
     <Info.GlobalLinks href="https://codemirror.net/">
      CodeMirror
     </Info.GlobalLinks>
     I tried other editors like
     <Info.GlobalLinks href="https://ace.c9.io/">
      Ace
     </Info.GlobalLinks>{" "}
     and
     <Info.GlobalLinks href="https://microsoft.github.io/monaco-editor/">
      Monaco
     </Info.GlobalLinks>{" "}
     and both had vim mode but was not better in comparison to codemirror.
     Also at the moment I use codemirror5 which is the version that
     supports vim-mode. Codemirror-next does not support vim mode yet! For
     more info check
     <Info.GlobalLinks
      href="https://github.com/codemirror/codemirror.next/issues/79"
     >
      this
     </Info.GlobalLinks>.
     <Info.Question>Is this on github ?</Info.Question>
     Of Course. Vimgore is totally open source. Check it out
     <Info.GlobalLinks href="https://github.com/ps173/vimgore">
      here
     </Info.GlobalLinks>. And if you like it show your support by just
     clicking that start button
    </Info.Text>
   </Info.Container>
   <Info.EmptyArea />
   <Info.EmptyArea />
   <Info.Title>Personal Advertising</Info.Title>
   <Info.Container>
    <Info.EmptyArea />
    <Info.Text>
     Yea That's All For Faqs. You can contact me via{" "}
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
