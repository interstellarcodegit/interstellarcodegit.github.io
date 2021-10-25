import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const entry = document.querySelector("#main");

const Main = () => {
  return (
    <div id="bd-div">
      <Nav />
      <div className="main_stuff">
        <Preamble />
        <AboutPage />
        <Pastwork />
        <PortfolioPage />
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="nav-main">
      <img src="images/log.png" className="logo" />
      <ul className="nav-items">
        <li>
          <a id="anchor" href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a id="anchor" href="#">
            Projects
          </a>
        </li>
        <li>
          <a id="anchor" href="#">
            Experience
          </a>
        </li>
        <li>
          <a id="anchor" href="#">
            Blog
          </a>
        </li>
        <li>
          <a id="anchor" href="#">
            About
          </a>
        </li>
        <li>
          <a id="anchor" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="pointer"></div>
    </nav>
  );
};
const Preamble = () => {
  return (
    <div className="preambles-main">
      <div className="wrap_div">
        <div className="cover">
          <h1 id="pre-header">His name is Kelvin Ngeno..... </h1>
          <br />
          <div className="thisis">
            <p className="pr-info">And this is </p>{" "}
            <span className="name_span">Interstellar Code</span>
          </div>
          <div className="top_description">
            <p className="top_top_description">
              I am a <span className="career-span">web developer</span>
              revolutionalizing the <span className="field_span">internet</span>
            </p>
            <p className="lower_top_description">
              I'm a Software Engineer and Internet Entrepreneur I advance
              technology by contributing to open source I am a creator,
              instructor, mentor and consultant I teach GraphQL and Ruby on
              Rails at GraphQL on Rails and consult for the same technologies
            </p>
          </div>
        </div>
        <TopSocialIcons />
      </div>
    </div>
  );
};
const PageTop = (props) => {
  return (
    <div className="page_top_div">
      <span className="page_top_text">{props.page}</span>
      <div className="rule"></div>
    </div>
  );
};
const AboutPage = () => {
  return (
    <div className="about">
      <PageTop page="About" />
      <div className="about_main">
        <div className="about_desc">
          <p>
            Hello world!I am Kelvin Ngeno a visionary , creative and focused web
            developer
            <br />
            <br />
            I design, develop and deploy backend services (APIs) with focus on
            high availability, low latency and scalability.
            <br />
            <br />
            I also frequently write client-facing code that consume web
            services.
            <br />
            <br />
            Ive worked with technologies such as Python , Javascript , Web
            frameworks like Django and
            <span className="many_more_span">many more</span>
          </p>
        </div>
        <div className="about_image_div">
          <img className="about_image" src="../images/me.jpg" />
          <div className="email_div">
            <div className="email_wrap">
              <span className="email_span">interstellarcg@gmail.com</span>
              <div className="email_span_rule"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Pastwork = () => {
  return (
    <div className="past_work">
      <PageTop page="My Past Work" />
      <div className="past_work_main_page">
        <div className="works_list">
          <ul>
            <li>
              <a href="#">Web</a>
            </li>
            <li>
              <a href="#">Mobile Apps</a>
            </li>
            <li>
              <a href="#">APIs</a>
            </li>
            <li>
              <a href="#">Designs</a>
            </li>
            <li>
              <a href="#">Desktop Apps</a>
            </li>
          </ul>
        </div>
        <div className="works_wrap">
          <div className="scrolls_wrap">
            <div className="works_side_scroll">
              <div className="work_scroll_div"></div>
            </div>
          </div>
          <div className="works_main_view">
            <div className="works_title_wrap_cover">
              <div className="works_title_wrap">
                <h2 className="works_title">
                  <h3 className="work_number">01</h3>
                  Website for Jipas Tensail Architectural
                </h2>
                <div className="works_title_bottom_rule"></div>
              </div>
            </div>
            <p className="work_desc">
              This is a website I designed and developed for Jipas Tensail
              Architectural...a Architecturalcompany based in Nairobi,
              Kenya..The designing and development of the website took about 1
              month after which it was delivered...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const PortFolioItem = (props) => {
  return (
    <div className="portfolio_item">
      <div className="glass_title_cover">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="float_glass">
          <h2 className="glass_title">{props.title}</h2>

          <p className="glass_description">{props.description}</p>
        </div>
      </div>

      <div className="project_image">
        <img className="project_img" src={props.src} alt={props.image_alt} />
      </div>
    </div>
  );
};
const PortfolioView = (props) => {
  return (
    <div className="main_portfolio_view">
      <PortFolioItem
        title="Website for Finance Grow"
        description="Hello world!I am Kelvin Ngeno a visionary , creative and focused web developer I design, develop and deploy backend services (APIs) with focus on high availability, low latency and scalability."
        src="./images/financeapp.webp"
      />
      <PortFolioItem
        title="Website for Finance Grow"
        description="Hello world!I am Kelvin Ngeno a visionary , creative and focused web developer I design, develop and deploy backend services (APIs) with focus on high availability, low latency and scalability."
        src="./images/financeapp.webp"
      />
    </div>
  );
};
const PortfolioPage = () => {
  return (
    <div className="portfolio_page">
      <PageTop page="Portfolio" />
      <div className="main_portfolio_view">
        <PortfolioView />
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="getintouch">
      <PageTop page="Get in Touch" />
      <div className="main_contact_view">
        <p className="contact_description">
          For about 2 hours a day, I am consulting for GraphQL and Ruby on Rails
          <br />
          projects for $80/hr Contact me below for a booking. And if you just
          want to say hi or if you have any question, my inbox is open! :)
          <br />
          '#positivityalltheway
        </p>
        <a className="anchor_contact" href="#">
          Contact Interstellar
        </a>
      </div>
    </div>
  );
};
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
const Footer = () => {
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
//gsap.from(".nav-item", {duration:3,y:-20});

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
