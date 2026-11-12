import React, { useState } from "react";

import { filters, projects } from "../../data/portfolio";

const Work = () => {
  const [active, setActive] = useState("all");

  return (
    <section className="work-band" id="work">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Portfolio</span>
          <h2>
            Selected <span className="grad">work</span>
          </h2>
          <p>Shopware plugins, SaaS products and client websites.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={active === filter.id}
              className={active === filter.id ? "on" : undefined}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="work-grid">
          {projects.map((project) => {
            const show = active === "all" || project.category === active;
            const thumbClass = [
              "thumb",
              project.logo ? "logo" : "",
              project.wide ? "wide" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <article
                className={`proj rv${show ? "" : " hidden"}`}
                key={project.title}
              >
                <div className={thumbClass}>
                  <img src={project.image} alt={project.alt} />
                  <span className="tag">{project.tag}</span>
                </div>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.pills ? (
                    <div className="pills">
                      {project.pills.map((pill) => (
                        <span key={pill}>{pill}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
