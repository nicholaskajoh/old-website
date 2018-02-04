import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./Header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const header = (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  ReactDOM.render(header, div);
  ReactDOM.unmountComponentAtNode(div);
});
