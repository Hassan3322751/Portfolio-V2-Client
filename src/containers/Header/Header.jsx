import React, { useEffect, useState } from "react";

import { client } from "../../client";
import { heroChips, RESUME_URL } from "../../data/portfolio";

const Header = () => {
  const [resumeUrl, setResumeUrl] = useState(RESUME_URL);

  useEffect(() => {
    const query = `*[_type == "aboutme"][0]{ "resumeUrl": resume.asset->url }`;
    client
      .fetch(query)
      .then((data) => {
        if (data?.resumeUrl) setResumeUrl(data.resumeUrl);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="stage" aria-hidden="true">
          <div className="ring r2" />
          <div className="ring r1" />
          <div className="avatar">
            <img
              src="https://cdn.sanity.io/images/emwcwzek/production/c3777237f7ae362b06b2c27008a4d61c45a13438-880x880.png?rect=0,0,863,706&w=600"
              alt=""
            />
          </div>
          {heroChips.map((chip) => (
            <div className={`chip ${chip.className}`} key={chip.className}>
              <img src={chip.src} alt="" />
            </div>
          ))}
        </div>
        <span className="status">
          <i />
          Available for new projects
        </span>
        <h1>
          Hi, I'm Hassan — I build <span className="grad">Shopware plugins</span>{" "}
          &amp; real-time web apps
        </h1>
        <p className="lead">
          Full-stack and Shopware 6 developer crafting scalable, secure,
          user-friendly products with React, Next.js, Node.js and Symfony.
        </p>
        <div className="ctas">
          <a className="btn btn-primary" href="#work">
            View my work
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            className="btn btn-ghost"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download résumé
          </a>
        </div>
        <div className="stats">
          <div>
            <b>4+</b>
            <span>Years building</span>
          </div>
          <div>
            <b>15</b>
            <span>Projects shipped</span>
          </div>
          <div>
            <b>3</b>
            <span>Shopware plugins</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
