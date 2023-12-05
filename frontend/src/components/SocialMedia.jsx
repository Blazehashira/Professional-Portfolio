import React from "react";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/NasirMosani">
          <BsTwitterX />
        </a>
      </div>
      <div>
        <a href="https://github.com/Blazehashira">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nasir-sani-2448b91b7/">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
