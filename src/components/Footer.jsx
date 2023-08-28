import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2022 | Shambhvi Shakya</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Data Analyst</p>
        <p className="hidden sm:block">Designed by @0xSahilx</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in/sahil-aryan-singh-362612212"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://instagram.com/figxmas?igshid=NzZhOTFlYzFmZQ="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://github.com/0xSahilx"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:sahilaryan9211@gmail.com.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
