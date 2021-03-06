import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Col, Row, Form } from "react-bootstrap";

export default function Nav() {
  return (
    <section className="navigation">
    <div className="mobileNav">
    <div className="topbar">
      <nav className="navbar">
        <div class="nav">
          <a href="javascript:void(0);" onclick="myFunction()">
            <FontAwesomeIcon icon={faBars} size="3x" />
          </a>
        </div>

        <div className="navElem">
        <Link
            to="/PorjectsPage"
            href="./projects"
            id="myLinks"
            style={{ textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link 
            to="/"
            href="./" 
            id="myLinks"
            style={{ textDecoration: "none" }}>
            Home
          </Link>
        </div>
      </nav>
    </div>
    </div>



    <Container fluid="md">
    <div className="desktopNav">
      <div className="flex-row">
      <Row>
        <div className="links">
        <div className="link">
        <Link
            to="/ProjectsPage"
            href="./projects"
            id="myLinks"
            style={{ textDecoration: "none" }}
          >
            Projects
          </Link>
          </div>  
          <div className="link">
          <Link 
            to="/"
            href="./" 
            id="myLinks"
            style={{ textDecoration: "none" }}>
            Home
          </Link>
          </div>

        </div>
        </Row>
        </div>
    </div>
    </Container>
  </section>

  );
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
