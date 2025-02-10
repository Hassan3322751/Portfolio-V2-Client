import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/hassan-raza-a05500285"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/923095899751"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/mianhassan6964"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
