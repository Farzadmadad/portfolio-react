import React from "react";
import pic1 from "./img-1.png";
import pic2 from "./img3.jpeg";
import pic3 from "./img4.jpg";

export default function porject() {
  return (
    <div>
      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">
              {" "}
              <span>Projects</span>
            </h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1>Project 1</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div className="project-img">
                <img src={pic3} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 2</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div className="project-img">
                <img src={pic1} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 3</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div className="project-img">
                <img src={pic2} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Project 4</h1>
                <h2>Coding is Love</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  iusto cupiditate voluptatum impedit unde rem ipsa distinctio
                  illum quae mollitia ut, accusantium eius odio ducimus illo
                  neque atque libero non sunt harum? Ipsum repellat animi, fugit
                  architecto voluptatum odit et!
                </p>
              </div>
              <div className="project-img">
                <img src={pic1} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
