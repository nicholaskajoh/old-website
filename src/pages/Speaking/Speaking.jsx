import React from "react";
import "./Speaking.css";

const data = [
  {
    id: 101,
    title: "Building a recommendation engine using Machine Learning (Talk)",
    description: `Learn how recommendation engines work and
      build your own using Machine Learning (forLoop Bells, 2018).`,
    icon: "fab fa-python",
    links: [
      {
        id: 1,
        title: "See the slides",
        url: "http://bit.ly/reco-with-ml",
      }
    ]
  },
  {
    id: 182,
    title:
      "Git + GitHub (Workshop)",
    description: "An introduction to version control using Git and GitHub.",
    icon: "fab fa-github",
    links: []
  },
  {
    id: 188,
    title: "Demystifying APIs (Workshop)",
    description:
      "What are APIs? Why do I need them? How do they work? How can I make them?",
    icon: "fa fa-plug",
    links: []
  },
  {
    id: 189,
    title: "Demystifying MVC (Workshop)",
    description:
      "Learn how MVC works and open your window to the world of modern web frameworks.",
    icon: "fa fa-rocket",
    links: []
  },
];

const Speaking = () => (
  <main>
    <div className="text-left">
      <h4 className="text-center">Speaking</h4>

      <p>Talks given/workshops organized or in the works...</p>

      {data.map(e => {
        return (
          <div className="media mb-3" key={e.id}>
            <i className={"fa-3x mr-3 " + e.icon} />
            <div className="media-body">
              <h5 className="mt-0">{e.title}</h5>
              {e.description}
              <ul className="nav">
                {e.links.map(link => {
                  return (
                    <li className="nav-item" key={link.id}>
                      <a
                        className="nav-link pl-0"
                        href={link.url}
                        target="_blank"
                      >
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

export default Speaking;
