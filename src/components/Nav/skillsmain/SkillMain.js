import React from "react";
import "./skillmain.css";

const SkillMain = () => {
  return (
    <section>
      <div className="skillmain-container">
        <button className="html" href="https://developer.mozilla.org/es/docs/Web/HTML"></button>
        <button className="css" href="https://developer.mozilla.org/es/docs/Web/CSS"></button>
        <button className="js" href="https://developer.mozilla.org/es/docs/Web/JavaScript"></button>
        <button className="react" href="https://reactjs.org/"></button>
        <button className="git" href="https://git-scm.com/"></button>
        <button className="github" href="https://github.com/"></button>
        <button className="figma" href="https://www.figma.com/"></button>
      </div>
      <div className="skillp-container">
        <p className="skillp-parrafo">Estas son algunas de las habilidades con las que cuento actualmente...</p>
      </div>
    </section>
  )
  
}

export default SkillMain