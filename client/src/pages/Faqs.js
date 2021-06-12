import React from "react";
import { Faqs } from "../components";

const FaqContainer = () => {
  return (
    <Faqs.Container>
      <Faqs.Title>Vim Gore : Faqs</Faqs.Title>
      <Faqs.Text>
        So Vim Gore was made to help you learn about and get familiar with the
        vim text editor and key-binds. Before Starting to play the game Make
        sure you go through vim tutor at least once or just check the{" "}
        <Faqs.Link href="https://vimgore.netlify.app/learn-keys">
          Learn-Keys Page.
        </Faqs.Link>
        Well my motive behind this app was to help people get familiar with
        vim-keys and decide for themselves if they fit your workflow or not. To
        Get started with vim you will firstly need to go through the{" "}
        <Faqs.Link href="https://vimgore.netlify.app/learn-keys">
          vim-tutor
        </Faqs.Link>{" "}
        once at least and then just jump into vim gore so that you can get
        started with vim
      </Faqs.Text>
      <Faqs.Text>
        You Can see the source code at{" "}
        <Faqs.Link href="https://github.com/ps173/VimGore">
          {" "}
          my github.
        </Faqs.Link>{" "}
        And don't forget to star at github 😁️.
      </Faqs.Text>
    </Faqs.Container>
  );
};

export default FaqContainer;
