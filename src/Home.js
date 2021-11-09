import React from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home">

      <div className="center">
        <img className="ann" src="./photo.jpg" alt="a girl, Angelina, smiling" />
      </div>

      <div className="intro">
        <h1>Angelina Poltavskiy</h1>
        <p>Hello, welcome to my Portfolio!</p>
        <p>
          Just a bit about my self, I'm an aspiring Front End Developer,
          currently in my senior year at UW studying Informatics.
        </p>
      </div>

      <div className="projectpeak">
        <h2>Projects</h2>
           
          {/* add in 2 project cards here */}

         <Button variant='primary' >See more of my projects</Button> 
      </div>

      <div className="contact">
        <h2>Let's Get In Touch</h2>
        <a href="https://www.linkedin.com/in/angelina-poltavskiy/" style={{ textDecoration: "none" }}><p>LinkedIn: Angelina Poltavskiy</p></a> 
        <p>Email: angelinapoltavskiy@gmail.com</p>
      </div>
    </div>
  );
}
