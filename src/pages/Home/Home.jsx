import React from "react";
import "./Home.css";
import avatar from "../../assets/img/me_v1.png";

const Home = () => (
  <main>
    <img
      src={avatar}
      className="rounded-circle"
      style={{ width: "200px", height: "200px" }}
      alt="My avatar"
    />

    <h4>Hello friend...</h4>

    <p>
      I'm Nicholas Kajoh, a Backend Developer Intern at{" "}
      <a href="https://trivoda.com">Trivoda</a>, Open Sourcerer, Technical
      writer, Community builder at{" "}
      <a href="https://medium.com/covenant-university-developers-community">
        Covenant University Developers' Community
      </a>, Machine Learning & DevOps enthusiast, and Student at{" "}
      <a href="http://www.covenantuniversity.edu.ng">Covenant University</a>.
      Nice to meet you!
    </p>
  </main>
);

export default Home;
