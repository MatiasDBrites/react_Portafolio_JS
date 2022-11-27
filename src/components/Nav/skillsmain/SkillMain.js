import React from "react";
import "./skillmain.css";
import html from "./img/html.ico";
import css from "./img/css3.ico";
import js from "./img/js.ico";
import react from "./img/react.ico";
import git from "./img/git.ico";
import github from "./img/githubIco.ico";
import figma from "./img/figma.ico";
import sass from "./img/sass.ico";
import testingLibrary from "./img/reactTestingLibrary.ico";
import jestTesting from "./img/jest.ico";
import nodejs from "./img/node-js-tutorial.png";
import expressjs from "./img/EXPRESSJS.png";
import postgres from "./img/POSTGRES.png";
import docker from "./img/DOCKER.png";
import mocha from "./img/MOCHA.png";
import cicd from "./img/cicd.png";
import eslint from "./img/Eslint.png";


const SkillMain = () => {
  return (
    <section>
      <div className="skillmain-container">
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/HTML" rel="noreferrer " target="_blank">
          <img className="img-skills" src={html}  alt="Html"  />
        </a>
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/CSS" rel="noreferrer " target="_blank">
          <img className="img-skills" src={css}  alt="Css"  />
        </a>
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/JavaScript" rel="noreferrer " target="_blank">
          <img className="img-skills" src={js}  alt="Javascript"  />
        </a>
        <a className="container-skills" href="https://reactjs.org/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={react}  alt="React"  />
        </a>
        <a className="container-skills" href="https://git-scm.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={git}  alt="Git"  />
        </a>
        <a className="container-skills" href="https://github.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={github}  alt="GitHub"  />
        </a>
        <a className="container-skills" href="https://www.figma.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={figma}  alt="Figma"  />
        </a>
        <a className="container-skills" href="https://sass-lang.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={sass}  alt="Sass"  />
        </a>
        <a className="container-skills" href="https://testing-library.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={testingLibrary}  alt="React-Testing-Library"  />
        </a>
        <a className="container-skills" href="https://jestjs.io/es-ES/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={jestTesting}  alt="Jest"  />
        </a>
        <a className="container-skills" href="https://nodejs.org/en/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={nodejs}  alt="NodeJS"  />
        </a>
        <a className="container-skills" href="https://expressjs.com/es/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={expressjs}  alt="ExpressJS"  />
        </a>
        <a className="container-skills" href="https://www.postgresql.org/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={postgres}  alt="PostgreSQL"  />
        </a>
        <a className="container-skills" href="https://hub.docker.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={docker}  alt="Docker and Dockerhub"  />
        </a>
        <a className="container-skills" href="https://mochajs.org/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={mocha}  alt="Mocha testing"  />
        </a>

        <a className="container-skills" href="https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html" rel="noreferrer " target="_blank">
          <img className="img-skills" src={cicd}  alt="CI/CD"  />
        </a>
        <a className="container-skills" href="https://mochajs.org/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={eslint}  alt="Eslint"  />
        </a>

      </div>
      <div className="skillp-container">
        <p className="skillp-parrafo">These are some of the skills I currently have...</p>
        <p className="skillp-parrafo">Back-end: • JavaScript (Express.js, Node.js) • Testing con CI/CD (Supertest, mocha).</p>
        <p className="skillp-parrafo">Front-end: • React • Html. CSS, Javascript • Testing con CI/CD (Jest, React).</p>
        <p className="skillp-parrafo">Others: • PostgreSql • Git / GitHub • Docker • Metodologias Agiles.</p>
      </div>
    </section>
  )  
}

export default SkillMain
