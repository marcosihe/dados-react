import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Reglas from "./components/Reglas";
import Nav from "./components/commons/Nav";
import Footer from "./components/commons/Footer";
import Error404 from "./components/commons/Error404";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/reglas">
          <Reglas />
        </Route>
        <Route exact path="/*">
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
