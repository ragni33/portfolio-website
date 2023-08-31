
import React, { useState } from 'react';
import './Experience.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(true);

  const toggleSection1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleSection2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleSection3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <section id ="experience" className="work-experience">
      <div className="container" style={{ marginTop: "-5%" }}>
        <h2 className="work-experience" style={{ textAlign: "center" }}>Work Experience</h2>

        
        <div className="work-header">
          <div className="work-title">
            <h4>Website Developer @ Exceed Technologies</h4>
            <p>April 2023 - Present</p>
          </div>
          <button className="toggle-button" onClick={toggleSection1}>
            {expanded1 ? '-' : '+'}
          </button>
        </div>
        {expanded1 && (
          <div className="work-content">
            <h5>
              <FaMapMarkerAlt /> Remote (South Bucks, UK)
            </h5>
            <ul className="bullet-points">
            <li>Worked closely with UI/UX designer to translate design mockups and wireframes into interactive and functional user interfaces.</li>
             <li>Implemented modern frontend frameworks such as React.js and Next.js to enhance application performance and user experience.</li>
              <li>Editing, Customizing templates by modifying layouts, styles, and components to align with the project's unique branding and requirements.</li>               <li>Collaborated with backend developers to integrate front-end components with server-side logic.</li>
          <li>Utilized CSS preprocessors (such as Sass) to streamline the styling process and maintain a scalable codebase.</li>
               <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</li>
            </ul>
            <div className="skills-section">
            <h6>React JS</h6>
              <h6>Typescript</h6>
              <h6>Next JS</h6>
              <h6>Bootstrap</h6>
              <h6>SCSS</h6>
            </div>
          </div>
        )}

      
        <div className="work-header">
          <div className="work-title">
            <h4>React JS intern @Code Clan</h4>
            <p>May 2022 - July 2022</p>
          </div>
          <button className="toggle-button" onClick={toggleSection2}>
            {expanded2 ? '-' : '+'}
          </button>
        </div>
        {expanded2 && (
          <div className="work-content">
            <h5>
              <FaMapMarkerAlt /> On-site (Karachi, Pakistan)
            </h5>
            <ul className="bullet-points">
              <li>Replace this with your bullet point.</li>
              <li>Collaborated with senior developers to develop user-friendly and responsive web applications using React.js.</li>
              <li>Assisted in implementing state management using Redux to manage complex application states and data flows.</li>
              <li>Contributed to front-end architecture and component design for improved code maintainability and scalability.</li>
              <li>Worked on optimizing application performance by analyzing and addressing bottlenecks.</li>
              <li>Participated in code reviews and pair programming sessions to enhance code quality and knowledge sharing.</li>
              <li>Utilized version control (Git) for collaborative development and code management.</li>
            </ul>
            <div className="skills-section">
            <h6>React JS</h6>
              <h6>Redux</h6>
              <h6>HTML5 & CSS3</h6>
              <h6>GitHub</h6>
            </div>
          </div>
        )}

        
        <div className="work-header">
          <div className="work-title">
            <h4>SEO Content Writer @Zera Creative</h4>
            <p>August 2021 - December 2022 - Part time</p>
          </div>
          <button className="toggle-button" onClick={toggleSection3}>
            {expanded3 ? '-' : '+'}
          </button>
        </div>
        {expanded3 && (
          <div className="work-content">
            <h5>
              <FaMapMarkerAlt /> Remote (Karachi, Pakistan)
            </h5>
            <ul className="bullet-points">
              <li> Created engaging and keyword-rich content that boosted organic search traffic.</li>
              <li>Conducted keyword research to identify high-traffic and relevant terms for content optimization.</li>
              <li>Developed SEO-friendly blog posts, articles, and website content that resonated with target audiences.</li>
              <li>Implemented on-page optimization techniques, including meta descriptions, header tags, and keyword placement.</li>
              <li>Collaborated with digital marketing teams to align content strategy with broader SEO and business goals.</li>
              <li>Crafted compelling and shareable content for social media platforms to enhance brand visibility.</li>

             


            </ul>
            
            <div className="skills-section">
            <h6>Keyword research using SEO tools</h6>
              <h6>Content Management Systems (CMS)</h6>
              <h6>on-page and off-page SEO techniques</h6>
              <h6>Communication skills</h6>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
