import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../css/style.scss";
import App from "./App";
import gsap from "gsap";
import { PageTop, WorkDisplay } from "./components";
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
export const Pastwork = () => {
  const [activeList, setActiveList] = React.useState("web");
  React.useEffect(() => {
    gsap.from(".past_work", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: ".past_work",
        toggleActions: "restart pause resume pause",
      },
      duration: 2,
    });
  }, []);
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
