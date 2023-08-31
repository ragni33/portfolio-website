import React from "react";
import "./Services.css";
import frontend from "../../assets/images/frontend.png";
import backend from "../../assets/images/backend.png";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-heading">Things I Can Do</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="service-item">
              <img src={frontend} alt="Service 1" className="service-image" />
              <h3 className="service-title">Frontend development</h3>
              <p className="service-text">
                I can build high quality and scalable and responsive user
                interfaces using React JS or Next JS with CSS or Tailwind CSS, I
                implement:
              </p>
              <ul className="service-bullets">
                <li>State Management using Redux and Context API</li>
                <li>Handling request using React-Query</li>
                <li>Handling and validating forms using react-hook-form</li>
                <li>Interactivity and DOM manipulation</li>
                <li>Authentication and Authorization, Roles and Permission</li>
                <li>Multi-languages</li>
                <li>
                  Real-time communication: Implement bidirectional and
                  persistent communication channels using Socker IO{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-item">
              <img src={backend} alt="Service 2" className="service-image" />
              <h3 className="service-title">Backend Development</h3>
              <p className="service-text">
                I can build a backend using Node JS with Express and Mongo DB
                and implement features like:
              </p>
              <ul className="service-bullets">
                <li>
                  Authentication and Authorization: Implement secure
                  authentication and authorization using JWT
                </li>
                <li>API Development: Design and Develop RESTful APIs</li>
                <li>
                  Real-time communication: Implement bidirectional and
                  persistent communication channels using Socker IO
                </li>
                <li>
                  Proficient in database security, data integrity, and handling
                  large datasets for creating efficient backend systems.
                </li>
                <li>
                  {" "}
                  Data modeling, relational database systems (e.g., MySQL,
                  PostgreSQL), NoSQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
