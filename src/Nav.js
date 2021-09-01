import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div class="bg-primary">
      <nav className="navbar">
        <div class="nav">
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>

        <div className="largeNav">
          <Link
            to="/PorjectsPage"
            href="./projects"
            style={{ textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link to="/" href="./" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </div>

        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>

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
