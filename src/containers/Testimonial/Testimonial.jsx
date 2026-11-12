import React, { useEffect, useState } from "react";

import { client } from "../../client";
import { testimonials as fallbackTestimonials } from "../../data/portfolio";

const ReviewCard = ({ item }) => (
  <figure className="review">
    <span className="review-tag">{item.tag}</span>
    <blockquote>{item.quote}</blockquote>
    <figcaption className="who">
      <span className="av">
        {item.avatar ? (
          <img src={item.avatar} alt="" />
        ) : (
          item.initial
        )}
      </span>
      <span>
        <b>{item.name}</b>
        <small>{item.company}</small>
      </span>
    </figcaption>
  </figure>
);

const Testimonial = () => {
  const [items, setItems] = useState(fallbackTestimonials);

  useEffect(() => {
    const query = `*[_type == "testimonials"]{name, company, feedback}`;
    client
      .fetch(query)
      .then((rows) => {
        if (!rows?.length) return;
        const known = new Map(
          fallbackTestimonials.map((item) => [item.name.toLowerCase(), item])
        );
        const fromSanity = rows
          .filter((row) => row.feedback && row.name)
          .map((row) => {
            const match = known.get(row.name.toLowerCase());
            return {
              quote: row.feedback,
              name: row.name,
              company: match?.company || row.company || "",
              tag: match?.tag || row.company || "Client",
              initial: match?.initial || row.name.trim().charAt(0).toUpperCase(),
              avatar: match?.avatar,
            };
          });
        const seen = new Set(fromSanity.map((row) => row.name.toLowerCase()));
        const written = fallbackTestimonials.filter(
          (item) => !seen.has(item.name.toLowerCase())
        );
        setItems([...fromSanity, ...written]);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Testimonials</span>
          <h2>
            What clients <span className="grad">say</span>
          </h2>
          <p>Notes from the companies and products I have shipped with.</p>
        </div>
      </div>
      <div className="review-marquee">
        <div className="review-track">
          {[0, 1].map((copy) => (
            <div
              className="review-set"
              key={copy}
              aria-hidden={copy === 1 || undefined}
            >
              {items.map((item) => (
                <ReviewCard item={item} key={`${copy}-${item.name}-${item.tag}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
