import React from "react";
import "./Skills.css";
import html from "../../assets/images/html.jpg";
import css from "../../assets/images/css.jpg";
import js from "../../assets/images/js.png";
import ts from "../../assets/images/ts.png";
import tailwind from "../../assets/images/tailwind.jpg";
import react from "../../assets/images/react.png";
import nextjs from "../../assets/images/nextjs.png";
import redux from "../../assets/images/redux.png";
import nodejs from "../../assets/images/nodejs.png";
import mongo from "../../assets/images/mongo.jpg";
import firebase from "../../assets/images/firebase.png";
import github from "../../assets/images/github.png";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-heading">Things I've Learned So Far - Skills</h2>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2">
            <img src={html} alt="HTML" className="skill-image" />
            <h4 className="skill-title">HTML</h4>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={css} alt="CSS" className="skill-image" />
            <h3 className="skill-title">CSS</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={js} alt="JavaScript" className="skill-image" />
            <h3 className="skill-title">JavaScript</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={ts} alt="TypeScript" className="skill-image" />
            <h3 className="skill-title">TypeScript</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={tailwind} alt="Tailwind CSS" className="skill-image" />
            <h3 className="skill-title">Tailwind CSS</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={react} alt="React" className="skill-image" />
            <h3 className="skill-title">React</h3>
          </div>

          <br />
          <div className="col-6 col-md-4 col-lg-2">
            <img src={nextjs} alt="Next.js" className="skill-image" />
            <h3 className="skill-title">Next.js</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={redux} alt="Redux" className="skill-image" />
            <h3 className="skill-title">Redux</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={nodejs} alt="Node.js" className="skill-image" />
            <h3 className="skill-title">Node.js</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={mongo} alt="MongoDB" className="skill-image" />
            <h3 className="skill-title">MongoDB</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={firebase} alt="Firebase" className="skill-image" />
            <h3 className="skill-title">Firebase</h3>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img src={github} alt="GitHub" className="skill-image" />
            <h3 className="skill-title">GitHub</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
