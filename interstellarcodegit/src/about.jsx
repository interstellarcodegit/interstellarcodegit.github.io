import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { PageTop, SkillItem } from "./components";
import ScrollTrigger from "gsap/ScrollTrigger";
export const AboutPage = () => {
  const [ActiveSkill, setActiveSkill] = React.useState("");
  const [ActiveSkillDesc, setActiveSkillDesc] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".about", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: "#about",
      },
      duration: 2,
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="about_main">
        <PageTop page="About" />
        <div className="text-gray-300">
          <p className="about_desc font-dosis">
            Hello !I am Kelvin Ngeno a visionary , creative and focused web
            developer....
            <br />
            <br />
            I design, develop and deploy backend services (APIs) with focus on
            high availability, low latency and scalability.
            <br />
            <br />
            I write client-facing code that consume web services.
            <br />
            <br />I work with technologies such as Python , Javascript , and Web
            frameworks like Django and many others
          </p>
        </div>
      </div>
    </div>
  );
};

/* <div
          className="skillPopup"
          style={{ display: visible ? "flex" : "none" }}
        >
          <div className="skillPopupMain">
            <h3 className="popupTitle">{ActiveSkill}</h3>
            <p className="popupDescription">{ActiveSkillDesc}</p>
          </div>
        </div> */

export const SkillsMainView = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".SkillsMainView", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: ".SkillsMainView",
      },
      duration: 2,
    });
    gsap.fromTo(
      ".skillItem",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".SkillsMainView",
          toggleActions: "restart pause resume pause",
        },
      }
    );
  }, []);
  return (
    <div className="SkillsMainView flex flex-col justify-center w-full">
      <PageTop page="My Skills" />

      <div className="flex flex-wrap justify-between" id="Theskills">
        <SkillItem
          level="Pro"
          image="javascript3.svg"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Javascript"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="React "
          image="react.svg"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Html"
          image="html5.svg"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="CSS"
          image="css.svg"
        />
        <SkillItem
          level="Advanced"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Python"
          image="python.svg"
        />
        <SkillItem
          level="Advanced"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Django"
          image="django.svg"
        />
        <SkillItem
          level="Intermediate"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Sass"
          image="sass.svg"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="React-Native"
          image="react.svg"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Django Rest"
          image="djangorest.png"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Figma"
          image="figma.svg"
        />
      </div>
    </div>
  );
};