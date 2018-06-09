import React from "react";
import "./Home.css";
import avatar from "../../assets/img/me_v3.jpg";

const Home = () => (
  <main>
    <img
      src={avatar}
      className="rounded-circle"
      style={{ width: "200px", height: "200px" }}
      alt="My avatar"
    />

    <h4 className="mt-3">Hello friend...</h4>

    <p>
      I'm Nicholas Kajoh, a Software Developer, Open Sourcerer, Technical
      writer, Community builder and Machine Learning enthusiast. Nice to meet
      you!
    </p>
  </main>
);

export default Home;
