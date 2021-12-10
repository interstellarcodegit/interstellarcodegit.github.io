import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { PageTop, SkillItem } from "./components";
import ScrollTrigger from "gsap/ScrollTrigger";
import rnsvg from "../images/react.svg";
import figsvg from "../images/figma.svg";
import djsvg from "../images/django.svg";
import restpng from "../images/djangorest.png";
import jssvg from "../images/mainJsLogo.svg";
import sassvg from "../images/sass.svg";
import cssvg from "../images/css.svg";
import htmlsvg from "../images/html5.svg";
import pysvg from "../images/python.svg";
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
        <div className="text-gray-600">
          <p className="about_desc font-dosis ">
            I am Interstellar a visionary , creative and focused web
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
            frameworks like Django and many others <br /> I own my company
            called Interstellar Code and if you feel that you need to rejuvenate
            your business by having a wonderful app or website that wins the
            attention of your customers , I'm here for you
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
    <div
      className="SkillsMainView flex flex-col justify-center w-full"
      id="skills"
    >
      <PageTop page="My Skills" />

      <div className="flex flex-wrap justify-center" id="Theskills">
        <SkillItem
          level="Pro"
          image={jssvg}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Javascript"
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="React"
          image={rnsvg}
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Html"
          image={htmlsvg}
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="CSS"
          image={cssvg}
        />
        <SkillItem
          level="Advanced"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Python"
          image={pysvg}
        />
        <SkillItem
          level="Advanced"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Django"
          image={djsvg}
        />
        <SkillItem
          level="Intermediate"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Sass"
          image={sassvg}
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="React-Native"
          image={rnsvg}
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Django Rest"
          image={restpng}
        />
        <SkillItem
          level="Pro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
          name="Figma"
          image={figsvg}
        />
      </div>
    </div>
  );
};
