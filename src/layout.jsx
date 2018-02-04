import React from "react";
import { Route } from "react-router-dom";
import Header from "./partials/Header/Header";
import Footer from "./partials/Footer/Footer";

const Layout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="layout">
        <Header />
        <div className="content px-1">
          <Component {...matchProps} />
        </div>
        <Footer />
      </div>
    )}
  />
);

export default Layout;
