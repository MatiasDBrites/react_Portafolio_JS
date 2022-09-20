import React from "react";
import imagen from "./img/imgMDB2.png";
import video from "./video/video6.mp4";
import icon1 from "./img/linkedinIco.ico"
import icon2 from "./img/gmailIco.ico"
import icon3 from "./img/githubIco.ico"
import "./homemain.css"

const HomeMain = () => {
  return (
    <div className="container-home">
      <h1>About me...</h1>
      <video autoPlay="on"  muted>
        <source type="video/webm" src={video}></source>
      </video>
      <img className="container-img" src={imagen} alt="" />
      <div className="container-i">
        <a className="container-i__co" href="https://www.linkedin.com/in/matias-d-brites-9b0251a3/" rel="noreferrer " target="_blank">
          <img className="img-contact"  src={icon1} alt=""  />
        </a>
        <a className="container-i__co" href="mailto:matias.brites@gmail.com" rel="noreferrer " target="_blank">
          <img className="img-contact" src={icon2} alt=""  />
        </a>
        <a className="container-i__co" href="https://github.com/MatiasDBrites/" rel="noreferrer " target="_blank">
          <img className="img-contact" src={icon3} alt=""  />
        </a>
      </div>
      <p className="container-p"Hello!!! My name is Matias D Brites,
        I am a student at the LarnU Full-stack bootcamp and I live in Cancun Mexico.
        I have knowledge in UX Design, currently
        I am acquiring Front-End developer skills focused on JavaScript.
      </p>
    </div>
  )
}

export default HomeMain;
