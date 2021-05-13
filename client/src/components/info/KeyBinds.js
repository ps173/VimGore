import React from 'react';
import "./info.css"
const KeyBinds = () => {

  return (
    <div className="KeyBinds-Page">
      <h1> Keybinds </h1>
      <p> 
        The Editor uses vim key binds to edit. 
        The General keys are :
        <ul className="Keys-list">
          <li> Press <b> i </b> to enter in insert mode </li>
          <li> Press <b>Esc</b> to enter in Normal mode </li>
          <li> Press <b>v</b> to enter in visual mode i.e. selection mode </li>
          <li> Press <b> w</b> to move at start of word </li>
          <li> Press <b> e </b> to move at end of word </li>
          <li> Press <b> gg </b> to go to first line </li>
          <li> Press <b> G </b> to go to last line </li>
          <li> Press <b> x </b> to delete a letter </li>
          <li> Press <b> dd </b> to delete a line </li>
          <li> Press <b> dw/de </b> to delete a word </li>
        </ul>
      </p>
    </div>
  );

}

export default KeyBinds
