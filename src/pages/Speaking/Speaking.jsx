import React from "react";
import "./Speaking.css";

const data = [
  {
    id: 183,
    title: `Super-charge your Laravel development workflow
      with Continuous Integration and Deployment (Talk)`,
    description: `They say move fast & break things. What if I told
      you that you could move fast without even breaking a sweat?
      CI/CD provides a superb workflow for building modern apps.
      Learn how to create a complete delivery pipeline that ensures
      speed, security, scalability & encourages collaboration.`,
    icon: "fab fa-laravel",
    links: []
  },
  {
    id: 182,
    title:
      "Git and GitHub: a workflow for modern software development (Workshop)",
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
  }
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
                    <li className="nav-item">
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

export default Speaking;
