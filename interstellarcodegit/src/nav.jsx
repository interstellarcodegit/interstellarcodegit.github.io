import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { PageTop } from "./components";
import logo from "../images/log.png";
export const Nav = () => {
  React.useLayoutEffect(() => {
    gsap.to("#anchor", {
      opacity: 1,
      duration: 2,
      delay: 2,
      stagger: 0.3,
    });
  }, []);
  // const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.querySelector(".nav_toggler").addEventListener("click", () => {
      if (i == 0) {
        gsap.to(".bar_one", {
          duration: nav_animation_duration,
          rotateZ: 0,
          y: 0,
        });
        gsap.to(".bar_three", {
          duration: nav_animation_duration,
          rotateZ: 0,
          y: 0,
        });
        gsap.to(".nav-main", {
          duration: nav_animation_duration * 2,
          height: "7vh",
        });
        document.querySelector(".bar_center").style.display = "block";
        i = 1;
      } else {
        gsap.to(".bar_one", {
          duration: nav_animation_duration,
          rotateZ: 45,
          y: -3,
        });
        gsap.to(".nav-main", {
          duration: nav_animation_duration * 1,
          height: "100vh",
        });
        gsap.to(".bar_three", {
          duration: nav_animation_duration,
          rotateZ: -45,
          y: -12.5,
        });
        document.querySelector(".bar_center").style.display = "none";
        i = 0;
      }
    });
  }, []);
  return (
    <nav className="nav-main">
      <div className="top_logo_div">
        <img src={logo} className="logo" />
        <div className="nav_toggler">
          <div className="bar bar_one"></div>
          <div className="bar bar_center"></div>
          <div className="bar bar_three"></div>
        </div>
      </div>
      <ul className="nav-items">
        <li>
          <a id="anchor" href="#preamble" className="active">
            Home
          </a>
        </li>
        <li>
          <a id="anchor" href="#about">
            About
          </a>
        </li>
        <li>
          <a id="anchor" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a id="anchor" href="#past_work">
            Projects
          </a>
        </li>
        {/* <li>
          <a id="anchor" href="#">
            Blog
          </a>
        </li> */}
        <li>
          <a id="anchor" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="pointer"></div>
    </nav>
  );
};
