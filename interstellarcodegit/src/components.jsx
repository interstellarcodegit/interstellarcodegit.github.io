import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";

export const Spacer = () => {
  return <div className="spacer"></div>;
};
export const PageTop = (props) => {
  return (
    <div className="page_top_div">
      <span className="page_top_text">{props.page}</span>
      <div className="rule"></div>
    </div>
  );
};
export const SkillItem = (props) => {
  return (
    <div className="skillItem group">
      <div className="flex flex-col">
        {/* <span>Level{props.level}</span> */}
        <span className="skillName">{props.name}</span>
        <img
          className=" opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-3 transition duration-1000"
          src={`../images/${props.image}`}
        />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="ft-main">
      <div className="ft-row">
        <ul className="social-ul">
          <li className="soc-li">
            <a className="soc-ref" href="">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="soc-li">
            <a className="soc-ref" href="https://twitter.com/CgInterstellar">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="soc-li">
            <a className="soc-ref" href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="soc-li">
            <a className="soc-ref" href="https://www.instagram.com/cginfinite/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="soc-li">
            <a className="soc-ref" href="https://youtu.be/MiBtJRV3wp0">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>

      <p className="ft-info">Interstellar code &copy; 2020</p>
    </div>
  );
};

export const WorkDisplay = (props) => {
  //   React.useEffect(() => {
  //     gsap.from(".about_desc", {
  //       opacity: 0,
  //       y: 200,

  //       duration: 2,
  //     });
  //     gsap.from(".skillItem", {
  //       opacity: 0,

  //       duration: 0.5,
  //       delay: 3,
  //       stagger: 0.3,
  //     });
  //   }, []);
  return (
    <div className="work_display">
      <div className="works_title_wrap_cover">
        <div className="works_title_wrap">
          <h2 className="works_title">
            <h3 className="work_number">{props.number}</h3>
            {props.title}
          </h2>
          <div className="works_title_bottom_rule"></div>
        </div>
      </div>
      <div className="work_desc_wrap">
        <p className="work_desc">{props.description}</p>

        <div className="technologies">
          <div className="tech_list">
            {props.tech.map((e, i) => {
              return <span className="tech_span">{e}</span>;
            })}
            <a href={props.to} className="external_link">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <div className="work_images">
          {props.images !== null && props.images !== undefined ? (
            props.images.map((e, i) => {
              return (
                <div className="workImageDiv">
                  <img src={e.src} alt={e.alt} className="workImage" />
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
