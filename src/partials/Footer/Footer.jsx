import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="social-links text-center">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://github.com/nicholaskajoh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://medium.com/@nicholaskajoh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium fa-2x" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://twitter.com/nicholaskajoh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://stackoverflow.com/users/6293466/nicholas-kajoh?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow fa-2x" />
        </a>
      </li>
    </ul>

    <p>
      Built with <i className="fa fa-heart text-danger" /> by{" "}
      <a
        href="https://twitter.com/nicholaskajoh"
        target="_blank"
        rel="noopener noreferrer"
      >
        yours awesome
      </a>{" "}
      using{" "}
      <a href="https://www.getbootstrap.com" target="_blank" rel="noopener noreferrer">
        Bootstrap
      </a>{" "}
      and{" "}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>.
    </p>
  </footer>
);

export default Footer;
