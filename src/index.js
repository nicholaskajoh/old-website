import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "./assets/css/bootstrap.spacelab.min.css";
import "./index.css";
import Layout from './layout';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Speaking from "./pages/Speaking/Speaking";
import Interests from "./pages/Interests/Interests";
import NotFound from "./pages/NotFound/NotFound";
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Layout path="/" exact component={Home} />
            <Layout path="/projects" component={Projects} />
            <Layout path="/speaking" component={Speaking} />
            <Layout path="/interests" component={Interests} />
            <Layout component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
