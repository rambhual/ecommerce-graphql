import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard";
import Product from "./pages/product";
export function App() {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
