import React from "react";
import "./Projects.css";

const data = [
  {
    id: 182,
    title: "FakesBlocker",
    description:
      "A tool to find and block impersonator/bot accounts on Twitter.",
    icon: "fa fa-ban",
    links: [
      {
        id: 1,
        title: "Website",
        url: "http://fakesblocker.ga"
      }
    ]
  },
  {
    id: 178,
    title: "ML Chops",
    description:
      "Machine Learning algorithms implemented from scratch using Python.",
    icon: "fab fa-python",
    links: [
      {
        id: 1,
        title: "GitHub",
        url: "https://github.com/nicholaskajoh/ML_Chops"
      }
    ]
  },
  {
    id: 177,
    title: "Algorithms",
    description: "Common CS algorithms written in Python, Java and C++.",
    icon: "fa fa-code",
    links: [
      {
        id: 1,
        title: "GitHub",
        url: "https://github.com/nicholaskajoh/Algorithms"
      }
    ]
  },
  {
    id: 166,
    title: "WP Energy Usage Calculator",
    description:
      "A Wordpress plugin that provides an easy and flexible way to calculate electricity usage.",
    icon: "fa fa-power-off",
    links: [
      {
        id: 1,
        title: "Install/Download",
        url: "https://wordpress.org/plugins/wp-energy-usage-calculator/"
      },
      {
        id: 2,
        title: "GitHub",
        url: "https://github.com/nicholaskajoh/wp-energy-usage-calculator"
      }
    ]
  }
];

const Projects = () => (
  <main>
    <div className="text-left">
      <h4 className="text-center">Projects</h4>

      <p>Some of the stuff I built...</p>

      {data.map(project => {
        return (
          <div className="media mb-3" key={project.id}>
            <i className={"fa-3x mr-3 " + project.icon} />
            <div className="media-body">
              <h5 className="mt-0">{project.title}</h5>
              {project.description}
              <ul className="nav">
                {project.links.map(link => {
                  return (
                    <li className="nav-item" key={link.id}>
                      <a className="nav-link pl-0" href={link.url} target="_blank">
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}

      <br />
    </div>
  </main>
);

export default Projects;
