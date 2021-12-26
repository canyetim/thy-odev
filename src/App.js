import React from "react";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./pages/List";
import Main from "./pages/Main";
import Result from "./pages/Result";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <div className="app white">
            <Header />
            <Row className="justify-content-md-center">
              <Col md={12}>
                <List />
              </Col>
            </Row>
          </div>
        </Route>
        <Route path="/result">
          <div className="app white">
            <Header />
            <Row className="justify-content-md-center">
              <Col md={12}>
                <Result />
              </Col>
            </Row>
          </div>
        </Route>
        <Route path="/">
          <div className="app dark">
            <Header />
            <Row className="justify-content-md-center">
              <Col md={12}>
                <Main />
              </Col>
            </Row>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
