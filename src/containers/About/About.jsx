import React from "react";

import { traits } from "../../data/portfolio";

const About = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">About me</span>
          <h2>
            Good design means <span className="grad">good business</span>
          </h2>
        </div>
        <p className="about-text rv">
          I'm Hassan Raza, a full-stack web and Shopware 6 developer. I turn
          ideas into fast, reliable products, from storefront plugins and
          payment integrations to real-time platforms built on queues and
          sockets.
        </p>
        <div className="about-grid">
          {traits.map((trait) => (
            <article className="trait rv" key={trait.title}>
              <div className="pic">
                <img src={trait.image} alt={trait.alt} />
              </div>
              <h3>{trait.title}</h3>
              <p>{trait.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
