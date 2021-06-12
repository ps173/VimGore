import React from "react";
// import GameArea from "./pages/GameArea";
import FaqContainer from "./pages/Faqs";
import { Header } from "./components";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo> Vim Gore</Header.Logo>
          <Header.LinksContainer>
            <Header.Links> Learn </Header.Links>
            <Header.Links> Faqs </Header.Links>
          </Header.LinksContainer>
        </Header.Container>
      </Header>
      <FaqContainer />
    </>
  );
}

export default App;
