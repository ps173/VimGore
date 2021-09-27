import { Info } from "../components";
// import Editor from "../components/ace-editor";

export default function LearnContainer() {
 return (
  <Info>
   <Info.Title>Learning Vim</Info.Title>
   <Info.Container>
    <Info.Text>
     Learning Vim is not that hard. Community is here to help you.
     <Info.Header>So what is vim ?</Info.Header>
     Think of vim as a skill to help you with coding faster Even if you are
     fast enough now and don't think that you want to try it I would still
     recommend you trying it. Atleast try the vim-modal editing. Modal
     editing is way of treating text as a editable document.

     <Info.Header>Where to start ?</Info.Header>

     I would recommend installing vim and just going through{" "}
     <Info.GlobalLinks
      href="http://www2.geog.ucl.ac.uk/~plewis/teaching/unix/vimtutor"
     >
      vimtutor
     </Info.GlobalLinks>{" "}
     and reading this masterpiece of documentation.

     After going through vim-tutor Just jump right into vim and start
     editing texts or readme. If you are used to vscode then use{" "}
     <Info.GlobalLinks href="https://github.com/VSCodeVim/Vim">
      this
     </Info.GlobalLinks>{" "}
     extension to edit text. Now learning vim will take time but there is
     no wrong way to use vim. It is just meant to make you faster so your
     experience is not bound by anyone.

     <Info.Header>Further Reading</Info.Header>

     Also If you want to check out more about vim see given links

     <Info.UL>
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
      <li>
       <Info.GlobalLinks
        href="https://devhints.io/vim"
       >
        Vim Cheat Sheet
       </Info.GlobalLinks>
      </li>
      <li>
       <Info.GlobalLinks
        href="https://www.youtube.com/playlist?list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R"
       >
        ThePrimeagen
       </Info.GlobalLinks>
      </li>
     </Info.UL>
    </Info.Text>
   </Info.Container>
  </Info>
 );
}
