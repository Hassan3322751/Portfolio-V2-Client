import React, { useCallback, useEffect, useRef, useState } from "react";

import { client, urlFor } from "../../client";
import {
  filters as baseFilters,
  projects as fallbackProjects,
} from "../../data/portfolio";

const QUERY = `*[_type == "works"] | order(_createdAt desc){
  _id,
  title,
  description,
  tags,
  projectLink,
  codeLink,
  imgUrl,
  summary,
  challenge,
  solution,
  highlights,
  stack
}`;

const TAG_LABELS = {
  nextjs: "Next.js",
  reactjs: "React",
  nodejs: "Node.js",
  "html css": "HTML · CSS",
  symphony: "Symfony",
};

const normalize = (value = "") => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const imageKey = (url = "") => {
  const match = url.match(/([a-f0-9]{40}-\d+x\d+)/);
  return match ? match[1] : null;
};

const prettyTag = (tag = "") => TAG_LABELS[tag.toLowerCase()] || tag;

const categoryFor = (tags = []) => {
  const lower = tags.map((tag) => tag.toLowerCase());
  if (lower.includes("shopware")) return "shopware";
  if (lower.includes("nextjs")) return "next";
  if (lower.includes("reactjs") || lower.includes("react")) return "react";
  return "other";
};

const isLink = (value) => Boolean(value) && value !== "na";

const fromSanity = (row, curated) => {
  const tags = Array.isArray(row.tags) ? row.tags : [];
  const image = row.imgUrl?.asset ? urlFor(row.imgUrl).width(800).url() : null;
  const hasDetails =
    row.summary ||
    row.challenge ||
    row.solution ||
    (row.highlights && row.highlights.length) ||
    (row.stack && row.stack.length);
  const details = hasDetails
    ? {
        summary: row.summary,
        challenge: row.challenge,
        solution: row.solution,
        highlights: row.highlights,
        stack: row.stack,
      }
    : undefined;
  const base = {
    details,
    category: categoryFor(tags),
    tag: prettyTag(tags[0] || "Project"),
    title: row.title,
    description: row.description || "",
    image,
    alt: `${row.title} screenshot`,
    pills: tags.slice(1).map(prettyTag),
    link: isLink(row.projectLink) ? row.projectLink : null,
  };

  if (!curated) return base;

  return {
    ...base,
    ...curated,
    image: curated.image || image,
    link: base.link,
    details: base.details || curated.details,
  };
};

const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null);
  const details = project.details;

  useEffect(() => {
    const previous = document.activeElement;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (previous && previous.focus) previous.focus();
    };
  }, [onClose]);

  return (
    <div
      className="pm-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="pm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
      >
        <button
          type="button"
          className="pm-close"
          aria-label="Close project details"
          onClick={onClose}
          ref={closeRef}
        >
          &times;
        </button>
        <div className="pm-media">
          <img src={project.image} alt={project.alt} />
        </div>
        <div className="pm-body">
          <span className="pm-tag">{project.tag}</span>
          <h3 id="pm-title">{project.title}</h3>
          <p className="pm-lead">
            {details && details.summary ? details.summary : project.description}
          </p>

          {details && details.challenge ? (
            <div className="pm-sec">
              <h4>The challenge</h4>
              <p>{details.challenge}</p>
            </div>
          ) : null}

          {details && details.solution ? (
            <div className="pm-sec">
              <h4>How it was solved</h4>
              <p>{details.solution}</p>
            </div>
          ) : null}

          {details && details.highlights && details.highlights.length ? (
            <div className="pm-sec">
              <h4>What makes it work well</h4>
              <ul>
                {details.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {(details && details.stack) || project.pills ? (
            <div className="pills">
              {((details && details.stack) || project.pills).map((pill) => (
                <span key={pill}>{pill}</span>
              ))}
            </div>
          ) : null}

          {project.link ? (
            <a
              className="pm-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [projects, setProjects] = useState(fallbackProjects);
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    let cancelled = false;

    client
      .fetch(QUERY)
      .then((rows) => {
        if (cancelled || !rows?.length) return;

        const byTitle = new Map(
          fallbackProjects.map((item) => [normalize(item.title), item])
        );
        const byImage = new Map(
          fallbackProjects
            .map((item) => [imageKey(item.image), item])
            .filter(([key]) => key)
        );
        const used = new Set();

        const merged = rows
          .filter((row) => row.title)
          .map((row) => {
            const rowImage = row.imgUrl?.asset?._ref || "";
            const curated =
              byTitle.get(normalize(row.title)) || byImage.get(imageKey(rowImage));
            if (curated) used.add(curated);
            return fromSanity(row, curated);
          })
          .filter((item) => item.image);

        const leftovers = fallbackProjects.filter((item) => !used.has(item));
        setProjects([...merged, ...leftovers]);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const hasOther = projects.some((project) => project.category === "other");
  const filters = hasOther
    ? [...baseFilters, { id: "other", label: "Other" }]
    : baseFilters;

  return (
    <section className="work-band" id="work">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Portfolio</span>
          <h2>
            Selected <span className="grad">work</span>
          </h2>
          <p>
            Shopware plugins, SaaS products and client websites. Select a
            project for the details.
          </p>
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
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`${project.title}, view details`}
                onClick={() => setSelected(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(project);
                  }
                }}
              >
                <div className={thumbClass}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="tag">{project.tag}</span>
                </div>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.pills && project.pills.length ? (
                    <div className="pills">
                      {project.pills.map((pill) => (
                        <span key={pill}>{pill}</span>
                      ))}
                    </div>
                  ) : null}
                  <span className="more">View details</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {selected ? (
        <ProjectModal project={selected} onClose={closeModal} />
      ) : null}
    </section>
  );
};

export default Work;
