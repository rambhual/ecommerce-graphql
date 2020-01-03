import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <App />
    </HashRouter>
  </BrowserRouter>,
  rootElement
);
