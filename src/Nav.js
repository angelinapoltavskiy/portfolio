import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
        <a>About Me</a>
        <a>Contact Me</a>
      </div>

     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
     </a>

      {/* <ul>
        <li>
          <Link
            to="/profile"
            href="./profile"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
        </li>

        <li>
          <Link to="/about" href="./about" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/" href="./" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
      </ul> */}
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
