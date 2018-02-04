import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "./assets/css/bootstrap.litera.min.css";
import "./index.css";
import Layout from './layout';
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import OpenSource from "./pages/OpenSource/OpenSource";
import TalksAndWorkshops from "./pages/TalksAndWorkshops/TalksAndWorkshops";
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
            <Layout path="/work" component={Work} />
            <Layout path="/open-source" component={OpenSource} />
            <Layout path="/talks-and-workshops" component={TalksAndWorkshops} />
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
