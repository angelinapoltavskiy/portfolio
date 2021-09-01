import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div class="bg-primary">
    <nav className="navbar">
      <div class="nav">
        <FontAwesomeIcon icon={faBars} size="3x"/>
      </div>

      <div id="myLinks">
        <a>Home</a>
        <a>Projects</a>
      </div>

     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
     </a>

    <div className="largeNav">
      <ul>
        <li>
          <Link to="/PorjectsPage" href="./projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/" href="./" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
      </ul> 
      </div>
    </nav>

    </div>
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
