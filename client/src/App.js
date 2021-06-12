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
        </Header.Container>
      </Header>
      <FaqContainer />
    </>
  );
  // const [snippets, setSnippets] = useState([]);
  // const [globalScore, setGlobalScore] = useState(0);
  // // const handleRefresh = (e) => {
  // //   fetch(api_url)
  // //     .then((res) => res.json())
  // //     .then((json) => setSnippets(json));
  // // };
  // // useEffect(() => {
  // //   fetch(api_url)
  // //     .then((res) => res.json())
  // //     .then((json) => setSnippets(json));
  // // }, []);
  // if (snippets.length === 0) {
  //   console.log(snippets);
  //   return (
  //     <div className="container">
  //       <div className="lds-dual-ring"></div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <Router>
  //       <div className="navbar">
  //         <Link className="links" to="/">
  //           {" "}
  //           <h1> VimGore </h1>{" "}
  //         </Link>
  //         <nav className="navbar-links">
  //           <li>
  //             <Link className="links" to="/faqs">
  //               {" "}
  //               Faqs{" "}
  //             </Link>
  //           </li>
  //           <li>
  //             <Link className="links" to="/learn-keys">
  //               {" "}
  //               Learn{" "}
  //             </Link>
  //           </li>
  //         </nav>
  //       </div>
  //       <Switch>
  //         <Route exact path="/">
  //           {/* <button className="refresh-cta" onClick={handleRefresh}>
  //             {" "}
  //             refresh for new question{" "}
  //           </button> */}
  //           <div className="game-area">
  //             <ApiContext.Provider
  //               value={{ snippets, globalScore, setGlobalScore }}
  //             >
  //               <Editor />
  //               <TaskInfo />
  //             </ApiContext.Provider>
  //           </div>
  //         </Route>
  //         <Route path="/faqs">
  //           <Faqs />
  //         </Route>
  //         <Route path="/learn-keys">
  //           <KeyBinds />
  //         </Route>
  //       </Switch>
  //     </Router>
  //   );
  // }
}

export default App;
