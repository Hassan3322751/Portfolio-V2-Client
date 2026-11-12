import React, { useEffect } from "react";

import { About, Contact, Header, Skills, Testimonial, Work } from "./containers";
import { Navbar, Footer } from "./components";
import "./redesign.css";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("js");
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("pre");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".rv").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("pre");
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <Navbar />
      <main>
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
