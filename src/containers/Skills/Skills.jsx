import React from "react";

import { experience, skills } from "../../data/portfolio";

const Skills = () => {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Skills &amp; experience</span>
          <h2>
            The <span className="grad">stack</span> I ship with
          </h2>
        </div>
        <div className="skills-wrap">
          <div className="panel rv">
            <h3>
              Technologies <small>Daily drivers</small>
            </h3>
            <div className="logos">
              {skills.map((skill) => (
                <div className="sk" key={skill.name}>
                  <div className="ic">
                    <img src={skill.src} alt="" />
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel rv">
            <h3>
              Experience <small>2022 — today</small>
            </h3>
            <ol className="timeline">
              {experience.map((item) => (
                <li className={item.current ? "now" : undefined} key={item.year}>
                  <div className="yr">{item.year}</div>
                  <b>{item.role}</b>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
