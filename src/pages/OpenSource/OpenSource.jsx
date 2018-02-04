import React from "react";
import "./OpenSource.css";

const OpenSource = () => (
  <main>
    <div className="text-center">
      <h4>Open Source</h4>

      <p>Some of the OS projects I maintain...</p>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">ML Chops</h5>
          <p className="card-text">
            Machine Learning algorithms implemented from scratch using Python.
          </p>
          <a
            className="card-link"
            href="https://github.com/nicholaskajoh/ML_Chops"
          >
            GitHub
          </a>
          <a
            className="card-link"
            href="https://blog.devcenter.co/ml-chops-linear-regression-b0e429116bf3"
          >
            Tutorial series
          </a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">WP Energy Usage Calculator</h5>
          <p className="card-text">
            A Wordpress plugin that provides an easy and flexible way to
            calculate electricity usage.
          </p>
          <a
            className="card-link"
            href="https://github.com/nicholaskajoh/wp-energy-usage-calculator"
          >
            GitHub
          </a>
          <a
            className="card-link"
            href="https://wordpress.org/plugins/wp-energy-usage-calculator/"
          >
            Plugin
          </a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Book of One-liners</h5>
          <p className="card-text">
            Interesting and useful code one-liners in different languages.
          </p>
          <a
            className="card-link"
            href="https://github.com/nicholaskajoh/book-of-one-liners"
          >
            GitHub
          </a>
          <a
            className="card-link"
            href="https://nicholaskajoh.github.io/book-of-one-liners"
          >
            Website
          </a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Algorithms</h5>
          <p className="card-text">
            Common CS algorithms written in Python, Java and C++.
          </p>
          <a
            className="card-link"
            href="https://github.com/nicholaskajoh/Algorithms"
          >
            GitHub
          </a>
        </div>
      </div>

      <p className="font-weight-bold">
        More on my <a href="https://github.com/nicholaskajoh">GitHub</a>.
      </p>

      <br />
    </div>
  </main>
);

export default OpenSource;
