import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Reglas from "./components/Reglas";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Error404 from "./components/commons/Error404";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/dados-react">
          <Inicio />
        </Route>
        <Route exact path="/dados-react/reglas">
          <Reglas />
        </Route>
        <Route exact path="/dados-react/*">
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
