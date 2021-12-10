import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { PageTop } from "./components";
export const ContactPage = () => {
  return (
    <div className="getintouch" id="contact">
      <PageTop page="Get in Touch" />
      <div className="main_contact_view">
        <p className=" text-gray-100 font-dosis text-xl w-160px text-center">
          I do make high end web and mobile apps of all types.
          <br />
          <br />
          I also freelance on platforms such as fiverr
          <br /> Feel free to contact me in case you need one of the services or
          if you want to learn any of the technologies I use.
          <br />
          You can also ask questions, clarifications or even say Hi to me. You
          can also hire me to teach you app or full stack web development
        </p>
        <div className="anchor_contact_div">
          <a
            className="anchor_contact"
            href="mailto:techinterstellarcg@gmail.com"
          >
            Contact Interstellar
          </a>
        </div>
      </div>
    </div>
  );
};
