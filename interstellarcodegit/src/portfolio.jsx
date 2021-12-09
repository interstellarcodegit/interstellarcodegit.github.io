import { PageTop } from "./components";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
export const PortFolioItem = (props) => {
  return (
    <div
      className="portfolio_item"
      style={{ flexDirection: props.flexDirection }}
    >
      <div className="glass_title_cover">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="float_glass">
          <h2 className="glass_title">{props.title}</h2>

          <p className="font-abel text-gray-100 ">{props.description}</p>

          <div className="project_image2">
            <img
              className="project_img2"
              src={props.src}
              alt={props.image_alt}
            />
          </div>
        </div>
      </div>

      <div className="project_image">
        <img className="project_img" src={props.src} alt={props.image_alt} />
      </div>
    </div>
  );
};

export const PortfolioView = (props) => {
  return (
    <div id="portfolio" className="main_portfolio_view">
      <PortFolioItem
        flexDirection="row"
        title="Website for Finance Grow"
        description="Hello world!I am Kelvin Ngeno a visionary , creative and focused web developer I design, "
        src="./images/financeapp.webp"
      />
      <PortFolioItem
        flexDirection="row-reverse"
        title="Website for Finance Grow"
        description="Hello world!I am Kelvin Ngeno a visionary , creative and focused web developer I design,"
        src="./images/financeapp.webp"
      />
    </div>
  );
};
export const PortfolioPage = () => {
  React.useEffect(() => {
    gsap.from("#portfolio", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: "#portfolio",
        toggleActions: "restart pause resume pause",
      },
      duration: 2,
    });
  }, []);
  return (
    <div className="portfolio_page">
      <PageTop page="Portfolio" />
      <div className="main_portfolio_view">
        <PortfolioView />
      </div>
    </div>
  );
};
