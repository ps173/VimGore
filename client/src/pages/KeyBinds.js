import React from "react";
import { Info } from "../components";
const KeyBinds = () => {
  return (
    <Info.Container className="KeyBinds-Page">
      <Info.Title> Keybinds </Info.Title>
      <Info.Text>
        The Editor uses vim key binds to edit. The General keys are :
        <Info.ListContainer className="Keys-list">
          <Info.ListItem>
            {" "}
            Press <b> Esc </b> to go in normal mode{" "}
          </Info.ListItem>
          <Info.ListItem>
            {" "}
            Press <b> i </b> to enter in insert mode{" "}
          </Info.ListItem>
          <Info.ListItem>
            {" "}
            Press <b> v </b> to enter in visual mode{" "}
          </Info.ListItem>
          <Info.ListItem>
            {" "}
            Press <b> x </b> to enter in delete a character{" "}
          </Info.ListItem>
          <Info.ListItem>
            {" "}
            Press <b> dw </b> to delete a word{" "}
          </Info.ListItem>
          <Info.ListItem>
            {" "}
            Press <b> dd </b> to delete a line{" "}
          </Info.ListItem>
          <Info.ListItem>
            {" "}
            Press <b> cw </b> to change word{" "}
          </Info.ListItem>
        </Info.ListContainer>
      </Info.Text>
    </Info.Container>
  );
};

export default KeyBinds;
