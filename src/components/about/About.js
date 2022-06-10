import React from "react";
import "./About.css";
import Img from "../../asset/jyotiImg.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={Img} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />

              <h5>Experience</h5>
              <small>0.5 Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />

              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />

              <h5>Project</h5>
              <small>20+ Complited</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi obcaecati ducimus repellat temporibus sit earum culpa.
            Mollitia architecto repellendus necessitatibus quisquam aut
            voluptate eaque error, rem, veniam accusamus nostrum.
          </p>
          <a href="#contact" className="btn btn__primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
