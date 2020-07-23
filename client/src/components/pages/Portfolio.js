import React from "react";
import ContainerIn from "./ContainerIn";

function Portfolio(props) {
  return (
  <ContainerIn style={{ paddingTop: "40px" }}  id="portfolio-section" >
      <h3>Portfolio</h3>
     
      <section id="projectsTemplate">
        <div className="project">
          <a href="https://meghedi.github.io/Psychic-Game/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/1.jpg")} alt="..." />
            <div className="projectName">Psychic Game</div>
          </a>
        </div>
        <div className="project longPic">
          <a href="https://meghedi.github.io/unit-4-game/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/4.jpg")} alt="" />
            <div className="projectName">Crystal Collector Game</div>
          </a>
        </div>
        <div className="project">
          <a href="https://register.belairinternet.net/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/10.jpg")} alt="" />
            <div className="projectName">Regsiter Website</div>
          </a>
        </div>
        <div className="project longPic2">
          <a href="http://bai.live" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/11.jpg")} alt="" />
            <div className="projectName">Bai Live</div>
          </a>
        </div>
        <div className="project">
          <a href="https://meghedi.github.io/triviagame/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/2.jpg")} alt="" />
            <div className="projectName">Trivia Game</div>
          </a>
        </div>
        <div className="project longPic2">
          <a href="https://belairinternet.com" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/12.jpg")} alt="" />
            <div className="projectName">BelAirInternet</div>
          </a>
        </div>
        <div className="project longPic">
          <a href="https://meghedi.github.io/triviagame-hard/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/3.jpg")} alt="" />
            <div className="projectName">Trivia Game Difficult version</div>
          </a>
        </div>

        <div className="project">
          <a href="https://meghedi.github.io/giphyapi/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/5.jpg")} alt="" />
            <div className="projectName">Giphy Project</div>
          </a>
        </div>
        <div className="project">
          <a href="https://meghedi.github.io/clicky-game/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/13.jpg")} alt="" />
            <div className="projectName">Clicky Game</div>
          </a>
        </div>
        <div className="project">
          <a href="https://googlebooksearch-meg.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/14.jpg")} alt="" />
            <div className="projectName">Google Book Search</div>
          </a>
        </div>
        <div className="project longPic">
          <a href="https://group-project-three.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/9.jpg")} alt="" />
            <div className="projectName">Five-Star Foodies</div>
          </a>
        </div>
        <div className="project">
          <a href="https://meghedi.github.io/project-one/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/6.jpg")} alt="" />
            <div className="projectName">Weather Forecast</div>
          </a>
        </div>
        <div className="project longPic">
          <a href="https://meghedi.github.io/train-scheduler/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/7.jpg")} alt="" />
            <div className="projectName">Train Scheduler</div>
          </a>
        </div>
        <div className="project longPic">
          <a href="https://ucla-group-project-2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={require("../../assets/images/8.jpg")} alt="" />
            <div className="projectName">EService</div>
          </a>
        </div>
      </section>
    </ContainerIn>
  );
}

export default Portfolio;
