import React from "react";
import TitlebarImageList from "../components/Nav/projects/PortProject";
import video from "../components/Nav/homemain/video/video6.mp4"

const Proyectos = () => {
  return (
    <div className="proyectos__container">
      <h1>Proyectos</h1>
      <video autoPlay="on"  muted>
        <source type="video/webm" src={video}></source>
      </video>
      <TitlebarImageList></TitlebarImageList>
    </div>
  )
}

export default Proyectos