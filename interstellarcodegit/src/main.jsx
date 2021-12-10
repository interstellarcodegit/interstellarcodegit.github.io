import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { Nav } from "./nav";
import { Preamble } from "./preamble";
import { AboutPage, SkillsMainView } from "./about";
import { ContactPage } from "./contact";
import { PortfolioPage } from "./portfolio";
import { Pastwork } from "./pastwork";
import { Footer, Spacer } from "./components";
const entry = document.querySelector("#main");

const Main = () => {
  React.useEffect(() => {
    gsap.to("#bd-div", {
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <div
      id="bd-div"
      style={{
        opacity: 0,
      }}
    >
      <Nav />
      <div className="main_stuff">
        <Preamble />
        <Spacer />
        <AboutPage />

        <Spacer />
        <SkillsMainView />
        <Pastwork />
        <Spacer />

        <Spacer />
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};
var i = 1;
var nav_animation_duration = 0.5;

const Card = (props) => {
  return (
    <div className="card-bd">
      <h3 className="card-title">{props.name}</h3>
      <div className="card-img">
        <img className="img-card" src={props.img} />
      </div>
      <div className="card-nav">
        <a className="card-dir" href="#">
          more
        </a>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="card-flex">
      <Card name="Web" img="images/web.jpg" />
      <Card name="AI" img="images/ai.webp" />
      <Card img="images/software.jpg" name="Software" />
      <Card img="images/robotics.jpg" name="Robotics" />
    </div>
  );
};
const TopSocialIcons = () => {
  return (
    <div className="top_social_icons_div">
      <div className="vertical_rule"></div>
      <div className="top_icons_div">
        <ul className="top_social_ul">
          <li className="top_soc_li">
            <a className="soc-ref" href="">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="top_soc_li">
            <a className="soc-ref" href="https://twitter.com/CgInterstellar">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="top_soc_li">
            <a className="soc-ref" href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="top_soc_li">
            <a className="soc-ref" href="https://www.instagram.com/cginfinite/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="top_soc_li">
            <a className="soc-ref" href="https://youtu.be/MiBtJRV3wp0">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="vertical_rule"></div>
    </div>
  );
};
const feedImages = (props) => {
  return (
    <div className="feed-main">
      <h1 className="feed-title">,....</h1>
      <div className="feed-flex">
        <div className="feed-img-div">
          <img src="props.img-url" className="feed-img" />
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<Main />, entry);
gsap.to(".card-bd", { duration: 2, x: 20 });
gsap.to("#pre-header", { duration: 3, x: 20 });
