import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "../footer";


function Home() {
  return (
    <>
      <About></About>
      <hr/>
      <Portfolio></Portfolio>
      <hr/>
      <Contact></Contact>
      <hr/>
      <Footer></Footer>
    </>
  );
}

export default Home;
