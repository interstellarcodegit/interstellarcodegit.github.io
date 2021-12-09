import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { Spacer } from "./components";
export const Preamble = () => {
  React.useEffect(() => {
    gsap.from(".header_skill", {
      opacity: 0,
      stagger: 0.5,
      duration: 2.3,
      ease: "bounce",
    });
    gsap.from(".lower_top_description", {
      opacity: 0,

      duration: 2.3,
      ease: "bounce",
      delay: 2,
    });
  });

  return (
    <div className="preambles-main" id="preamble">
      <div className="wrap_div">
        <div className="cover">
          <div className="pre-header-div">
            <h1 id="pre-header">Kelvin Ng'eno </h1>
            <div className="skills_header">
              <h3 className="header_skill">
                <div className="seperator2"></div>Software Developer
              </h3>
              <div className="seperator"></div>
              <h3 className="header_skill">
                <div className="seperator2"></div>Designer
              </h3>
              <div className="seperator"></div>
              <h3 className="header_skill">
                <div className="seperator2"></div>App Developer
              </h3>
            </div>
          </div>

          <br />
          {/* <div className="thisis">
              <p className="pr-info">And this is </p>
              <span className="name_span">Interstellar Code</span>
            </div> */}
          <div className="top_description">
            <p className="lower_top_description">
              I'm a Software Engineer and Internet Entrepreneur I do design, I
              make apps for both iOS android and the web
              <Spacer /> I am a content creator, a great instructor and mentor
            </p>
          </div>
        </div>
        <img className="about_image" src="../images/me.jpg" />
      </div>
    </div>
  );
};
