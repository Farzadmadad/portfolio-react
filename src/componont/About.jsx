import React from "react";
import pic2 from "./porofil1.jpg"



export default function About() {
  return (
    <div>
              <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img className="img1" src={pic2} alt="img"/>
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>me</span></h1>
        <h2>Front End Developer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque
          repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
          exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni!
          Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt
          reprehenderit libero enim!</p>
        <a href="#" className="cta">Download CV</a>
      </div>
    </div>
  </section>
    </div>
  )
}




