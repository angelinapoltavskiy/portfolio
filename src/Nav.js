import React from 'react';


export function Nav() {
    return (
        <nav className="navbar">
          <ul>
            <li>

            </li>
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
              <Link
                to="/about"
                href="./about"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" href="./" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
          </ul>
        </nav>
    )
}