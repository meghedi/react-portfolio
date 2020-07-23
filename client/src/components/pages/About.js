import React from "react";
import ContainerIn from "./ContainerIn";

function About() {
  return (
    <ContainerIn>
      <div className="flexDiv">
        <div className="profileImg"></div>
        <div className="content">
          Meghedi loves programming,
          <p>
            She has almost 10 years of hands-on experience efficiently coding
            websites and applications as a Software Engineer.
          </p>
          <p>
            Building easy to use, user-friendly websites and applications is
            truly a passion of hers. In addition to my knowledge base, she
            actively seek out new technologies and stay up-to-date on industry
            trends and advancements. This has allowed her to stay ahead of the
            curve and deliver exceptional work to all of my employers, including
            those I've worked for on a project basis.
          </p>
          <div className="btnsDiv">
            <a
              href="https://github.com/meghedi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </a>
            <a
              href="https://www.linkedin.com/in/meghedih"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </ContainerIn>
  );
}

export default About;
