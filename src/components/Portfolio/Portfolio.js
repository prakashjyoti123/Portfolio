import React from "react";
import "./Portfolio.css";
import Project from "../../asset/project.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/prakashjyoti123/Expense_Tracker"
              className="btn"
              target="_blank"
            >
              Git Hub
            </a>
            <a
              href="https://expenses-tracker-react-app.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/prakashjyoti123/Expense_Tracker"
              className="btn"
              target="_blank"
            >
              Git Hub
            </a>
            <a
              href="https://expenses-tracker-react-app.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Project} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/prakashjyoti123/Expense_Tracker"
              className="btn"
              target="_blank"
            >
              Git Hub
            </a>
            <a
              href="https://expenses-tracker-react-app.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
