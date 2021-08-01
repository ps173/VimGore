import React from "react";
// import GameArea from "./pages/GameArea";
import FaqContainer from "./pages/Faqs";
import KeyBinds from "./pages/KeyBinds";
import { Header } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameContainer from "./pages/GameArea";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Header.Container>
            <Header.Logo to="/">Vim Gore</Header.Logo>
            <Header.LinksContainer>
              <Header.Links to="/learn">Learn</Header.Links>
              <Header.Links to="/faqs">Faqs</Header.Links>
            </Header.LinksContainer>
          </Header.Container>
        </Header>
        <Route exact path="/">
          <GameContainer />
        </Route>
        <Route exact path="/faqs">
          <FaqContainer />
        </Route>
        <Route exact path="/learn">
          <KeyBinds />
        </Route>
      </Router>
    </>
  );
}

export default App;
