import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
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
        <Pastwork />
        <Spacer />
        <PortfolioPage />
        <Spacer />
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};
var i = 1;
var nav_animation_duration = 0.5;
const Nav = () => {
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
        <img src="images/log.png" className="logo" />
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
          <a id="anchor" href="#portfolio">
            Projects
          </a>
        </li>
        <li>
          <a id="anchor" href="#skills">
            Skills
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
const Preamble = () => {
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
            {/* <p className="top_top_description">
              I am a <span className="career-span">web developer</span>
              revolutionalizing the <span className="field_span">internet</span>
            </p> */}
            <p className="lower_top_description">
              I'm a Software Engineer and Internet Entrepreneur I do design, I
              make apps for both iOS android and the web
              <Spacer /> I am a content creator, a great instructor and mentor
              {/* <span >I also occassionally make 3d animations </span> */}
            </p>
          </div>
        </div>
        <img className="about_image" src="../images/me.jpg" />
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
const SkillItem = (props) => {
  return (
    <div className="skillItem group">
      <div className="flex flex-col">
        <span className="skillName">{props.name}</span>
        <img
          className=" opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-3 transition duration-1000"
          src={`../images/${props.image}`}
        />
      </div>
    </div>
  );
};
const AboutPage = () => {
  const [ActiveSkill, setActiveSkill] = React.useState("");
  const [ActiveSkillDesc, setActiveSkillDesc] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  // React.useEffect(() => {}, [ActiveSkill]);
  // const ActivatePopup = (skill, description) => {
  //   // alert("yr");
  //   setActiveSkill(skill);
  //   setActiveSkillDesc(description);
  //   console.log("set");
  //   setVisible(true);
  //   const xt = setTimeout(() => {
  //     setVisible(false);
  //     clearTimeout(xt);
  //   }, 5000);
  // };
  return (
    <div className="about" id="about">
      <div className="about_main">
        <PageTop page="About" />
        <div className="about_desc">
          <p>
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
        <PageTop page="My Skills" />
        <div
          className="skillPopup"
          style={{ display: visible ? "flex" : "none" }}
        >
          <div className="skillPopupMain">
            <h3 className="popupTitle">{ActiveSkill}</h3>
            <p className="popupDescription">{ActiveSkillDesc}</p>
          </div>
        </div>
        <div className="skillsView" id="skills">
          <SkillItem
            image="javascript3.svg"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Javascript"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="React "
            image="react.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Html"
            image="html5.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="CSS"
            image="css.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Python"
            image="python.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Django"
            image="django.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Sass"
            image="sass.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="React-Native"
            image="react.svg"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Django Rest"
            image="djangorest.png"
          />
          <SkillItem
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eum molestiae quisquam, earum obcaecati architecto nemo consequatur amet odit nostrum"
            name="Figma"
            image="figma.svg"
          />
        </div>
      </div>
    </div>
  );
};
const WorkDisplay = (props) => {
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

const desktopapps = [
  {
    title: "Notehandy Desktop",
    description:
      "An app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
    ],
  },
  {
    title: "Interstellar  Music",
    description:
      "A beautiful music desktop app with a beautiful app user interface which is fully interactive",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
    ],
  },
];
const Designs = [
  {
    title: "Repent app",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
    ],

    description: "A design for the repent app",
  },
  {
    title: "My Portfolio",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
    ],
  },
];

const Apis = [
  {
    title: "NotehandyApp API",
    description:
      "An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
  },
  {
    title: "NotehandyApp API",
    description:
      "An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
  },

  {
    title: "NotehandyApp API",
    description:
      "An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
  },

  {
    title: "Repent App API",
    description:
      "An api made for a app of The Ministry of Repentance  and Holiness that enables updates , and playing and saving & organisation of videos& audio on the cloud..It also enables messanging between the Sheep Of Christ of the Church",
  },
];
const apps = [
  {
    title: "Notehandy",
    description:
      "An app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
        alt: "My design",
      },
    ],
  },
  {
    title: "Repent App",
    description:
      "An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
  },

  {
    title: "flex chat",
    description:
      "An api made for a app for taking notes. It enables saving the written  notes on the cloud to avoid inconveniences",
  },

  {
    title: "Interstellar Code app",
    description:
      "An api made for a app of The Ministry of Repentance  and Holiness that enables updates , and playing and saving & organisation of videos& audio on the cloud..It also enables messanging between the Sheep Of Christ of the Church",
  },
];
const Pastwork = () => {
  const [activeList, setActiveList] = React.useState("web");
  return (
    <div className="past_work">
      <PageTop page="My Past Work" />
      <div className="past_work_main_page">
        <div className="works_list">
          <ul>
            <li
              onClick={(e) => {
                setActiveList("web");
              }}
            >
              <a>Web</a>
            </li>
            <li
              onClick={(e) => {
                setActiveList("apps");
              }}
            >
              <a>Mobile Apps</a>
            </li>
            <li
              onClick={(e) => {
                setActiveList("apis");
              }}
            >
              <a>APIs</a>
            </li>
            <li
              onClick={(e) => {
                setActiveList("designs");
              }}
            >
              <a>Designs</a>
            </li>
            <li
              onClick={(e) => {
                setActiveList("desktopapps");
              }}
            >
              <a>Desktop Apps</a>
            </li>
          </ul>
        </div>
        <div className="works_wrap">
          <div className="works_main_view">
            {activeList == "web" ? (
              <div className="wrap_works_list">
                <WorkDisplay
                  to="#"
                  tech={[
                    "html",
                    "css",
                    "Javascript",
                    "React",
                    "Python",
                    "Django",
                  ]}
                  number="01"
                  title="Website for Jipas Tensail"
                  description="Association of Lawyers and Technologists in Africa.

Designed and created the website to help the association be visible on the internet and register new members."
                />
                <WorkDisplay
                  to="#"
                  tech={[
                    "html",
                    "css",
                    "Javascript",
                    "React",
                    "Python",
                    "Django",
                  ]}
                  number="02"
                  title="Africa Lawyers Organisation"
                  description="Association of Lawyers and Technologists in Africa."
                />
                <WorkDisplay
                  to="#"
                  tech={[
                    "html",
                    "css",
                    "Javascript",
                    "React",
                    "Python",
                    "Django",
                  ]}
                  number="03"
                  title="Website for Jipas Tensail"
                  description="Association of Lawyers and Technologists in Africa.
Designed and created the website to help the association be visible on the internet and register new members."
                />
              </div>
            ) : activeList == "apps" ? (
              <div className="wrap_works_list">
                {apps.map((e, i) => {
                  return (
                    <WorkDisplay
                      to="#"
                      tech={["React-Native", "Python", "Django"]}
                      number={`0${i + 1}`}
                      images={e.images}
                      title={e.title}
                      description={e.description}
                    />
                  );
                })}
              </div>
            ) : activeList == "apis" ? (
              <div className="wrap_works_list">
                {Apis.map((e, i) => {
                  return (
                    <WorkDisplay
                      to="#"
                      tech={["React-Native", "Python", "Django"]}
                      number={`0${i + 1}`}
                      images={e.images}
                      title={e.title}
                      description={e.description}
                    />
                  );
                })}
              </div>
            ) : activeList == "designs" ? (
              <div className="wrap_works_list">
                {Designs.map((e, i) => {
                  return (
                    <WorkDisplay
                      to="#"
                      tech={["figma"]}
                      number={`0${i + 1}`}
                      images={e.images}
                      title={e.title}
                      description={e.description}
                    />
                  );
                })}
              </div>
            ) : activeList == "desktopapps" ? (
              <div className="wrap_works_list">
                {desktopapps.map((e, i) => {
                  return (
                    <WorkDisplay
                      to="#"
                      tech={["Electron", "Python", "Django"]}
                      number={`0${i + 1}`}
                      images={e.images}
                      title={e.title}
                      description={e.description}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="wrap_works_list"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Spacer = () => {
  return <div className="spacer"></div>;
};
const PortFolioItem = (props) => {
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
const PortfolioView = (props) => {
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
    <div className="getintouch" id="contact">
      <PageTop page="Get in Touch" />
      <div className="main_contact_view">
        <p className=" text-gray-400 font-dosis text-2xl w-160px text-center">
          I do make high end web and mobile apps of all types.
          <br />
          for about 2 hours a day , I teach upcoming software engineers some of
          the technologies I use
          <br /> Feel free to contact me in case you need one of the services or
          if you want to learn any of the technologies I use.
          <br />
          You can also ask questions, clarifications or even say Hi to me.
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
