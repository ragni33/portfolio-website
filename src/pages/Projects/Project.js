import React from "react";
import "./Project.css";
import { AiOutlineGithub } from "react-icons/ai";
import pixar from "../../assets/images/pixar.png";
import promptbase from "../../assets/images/promptbase.png";
import chrip from "../../assets/images/chrip.png";

function Project() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 id="projects" className="section-heading">
          My Projects
        </h2>
        <div className="project-row">
          <div className="project-col">
            <img src={pixar} alt="Project 1" className="project-image" />
          </div>
          <div className="project-col" style={{ marginTop: "2%" }}>
            <h3 className="project-title">Pixar - Tech Solution</h3>
            <p className="project-description">
              Pixar, a website that deals with different businesses and offer
              their tech-driven services Clients looking to leverage technology
              in their ventures can easily find and connect with the right
              service providers, fostering collaboration and innovation in the
              tech industry.
            </p>
            <div className="project-skills">
              <ul className="skills-list">
                <li>React JS</li>
                <li>Node JS</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <a
              href="https://github.com/ragni33/pixar"
              target="_blank"
              rel="noopener noreferrer"
              className="code-link"
            >
              <AiOutlineGithub /> CODE
            </a>
          </div>
        </div>

        <div className="project-row">
          <div className="project-col">
            <img src={promptbase} alt="Project 1" className="project-image" />
          </div>
          <div className="project-col" style={{ marginTop: "5%" }}>
            <h3 className="project-title">Promptbase - Content Creation</h3>
            <p className="project-description">
              With a focus on language and text generation, Promptbase harnesses
              the capabilities of advanced artificial intelligence to help users
              craft compelling and coherent written content.{" "}
            </p>
            <div className="project-skills">
              <ul className="skills-list">
                <li>React JS</li>
                <li>React bootstrap</li>
                <li>Node JS</li>
              </ul>
            </div>
            <a
              href="https://github.com/ragni33/promptbasewebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="code-link"
            >
              <AiOutlineGithub /> CODE
            </a>
          </div>
        </div>

        <div className="project-row">
          <div className="project-col">
            <img src={chrip} alt="Project 1" className="project-image" />
          </div>
          <div className="project-col" style={{ marginTop: "5%" }}>
            <h3 className="project-title">Chrip - twitter analytics </h3>
            <p className="project-description">
              Chirp aims to empower users with the data-driven insights they
              need to optimize their Twitter strategies, increase engagement,
              and achieve their social media goals. By offering comprehensive
              analytics and actionable insights.{" "}
            </p>
            <div className="project-skills">
              <ul className="skills-list">
                <li>HTML5 & CSS3</li>
                <li>Bootstrap5</li>
                <li>Responsive</li>
              </ul>
            </div>
            <a
              href="https://github.com/ragni33/Chrip-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="code-link"
            >
              <AiOutlineGithub /> CODE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
