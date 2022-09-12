import React from "react";
import "./skillmain.css";
import html from "./img/html.ico";
import css from "./img/css3.ico";
import js from "./img/js.ico";
import react from "./img/react.ico";
import git from "./img/git.ico";
import github from "./img/githubIco.ico";
import figma from "./img/figma.ico";

const SkillMain = () => {
  return (
    <section>
      <div className="skillmain-container">
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/HTML" rel="noreferrer " target="_blank">
          <img className="img-skills" src={html}  alt="css"  />
        </a>
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/CSS" rel="noreferrer " target="_blank">
          <img className="img-skills" src={css}  alt=""  />
        </a>
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/JavaScript" rel="noreferrer " target="_blank">
          <img className="img-skills" src={js}  alt=""  />
        </a>
        <a className="container-skills" href="https://reactjs.org/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={react}  alt=""  />
        </a>
        <a className="container-skills" href="https://git-scm.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={git}  alt=""  />
        </a>
        <a className="container-skills" href="https://github.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={github}  alt=""  />
        </a>
        <a className="container-skills" href="https://www.figma.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={figma}  alt=""  />
        </a>


        {/* <button className="html" href="https://developer.mozilla.org/es/docs/Web/HTML"></button>
        <button className="css" href="https://developer.mozilla.org/es/docs/Web/CSS"></button>
        <button className="js" href="https://developer.mozilla.org/es/docs/Web/JavaScript"></button>
        <button className="react" href="https://reactjs.org/"></button>
        <button className="git" href="https://git-scm.com/"></button>
        <button className="github" href="https://github.com/"></button>
        <button className="figma" href="https://www.figma.com/"></button> */}
      </div>
      <div className="skillp-container">
        <p className="skillp-parrafo">Estas son algunas de las habilidades con las que cuento actualmente...</p>
      </div>
    </section>
  )
  
}

export default SkillMain