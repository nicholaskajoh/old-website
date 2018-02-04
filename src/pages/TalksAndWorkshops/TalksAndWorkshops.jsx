import React from "react";
import "./TalksAndWorkshops.css";

const TalksAndWorkshops = () => (
  <main>
    <div className="text-center">
      <h4>Talks and Workshops</h4>

      <p>Talks given/workshops organized or in the works...</p>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            Super-charge your Laravel development workflow with Continuous
            Integration and Deployment (Talk)
          </h5>
          <p className="card-text">
            They say move fast & break things. What if I told you that you could
            move fast without even breaking a sweat? CI/CD provides a superb
            workflow for building modern apps. Learn how to create a complete
            delivery pipeline that ensures speed, security, scalability &
            encourages collaboration.
          </p>
          <p className="text-muted mb-0">Slides and transcript coming soon!</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            Git and GitHub: a workflow for modern software development
            (Workshop)
          </h5>
          <p className="card-text">
            An introduction to version control using Git and GitHub.
          </p>
          <p className="text-muted mb-0">Slides and outline coming soon!</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">
            Problem solving with Algorithms: Build your own Search Engine (Workshop)
          </h5>
          <p className="card-text">
            Learn problem solving by building a search engine, leveraging popular CS algorithms.
          </p>
          <p className="text-muted mb-0">Slides and outline coming soon!</p>
        </div>
      </div>

      <br />
    </div>
  </main>
);

export default TalksAndWorkshops;
