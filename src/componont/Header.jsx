import React from "react";

export default function Header() {
  return (
    <div>
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>
                  <span>F</span>arzad <span>M</span>adadzadeh
                </h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li>
                  <a href="#" data-after="Home">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" data-after="Projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" data-after="About">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" data-after="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
