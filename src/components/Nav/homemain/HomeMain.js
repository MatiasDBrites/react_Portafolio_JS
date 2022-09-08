import React from "react";
import imagen from "./img/imgMDB2.png";
import video from "./video/video.mp4";
import "./homemain.css"

const HomeMain = () => {
  return (
    <div className="container-home">
      <h1>Sobre mi...</h1>
      <video autoplay="on" loop muted>
        <source type="video/webm" src={video}></source>
      </video>
      <img className="container-img" src={imagen} alt="" />
      <p className="container-p">Hola!!! Mi nombre es Matias D Brites, 
        soy estudiante en el bootcamp de Full-stack de LarnU y vivo en Cancun Mexico.
        Tengo conocimiento en Diseño UX,  actualmente estoy adquiriendo habilidades de
        desarrollador Front-End enfocado en JavaScript.
      </p>
    </div>
  )
}

export default HomeMain;