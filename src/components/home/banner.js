import React from 'react'
import Location from "../images/location.png"
import Github from "../images/github.png"
import Twitter from "../images/icons8-twitter-50.png"
import Figma from "../images/icons8-figma-50.png"
import Devimg from "../images/portfolio1.jpg"
const banner = () => {
  return (
    <div id='banner'>
      <section className="banner">
        <div className="container">
          <div className="banner-main">
            <div className="leftside">
             <h1>Hi, I'm Sahil</h1>
             <p>I'm a frontend developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Currently i'm working on myself to upgrade my skills</p>
             <div className="location">
              <img src={Location} alt="" className='img-hover' />
              <h4>ABOHAR , INDIA</h4>
             </div>
             <h2> <li>Available For New Projects </li></h2>
             <div className="contact-logos">
              <img src={Github} alt=""  className='img-hover'/>
              <img src={Twitter} alt="" className='img-hover'/>
              <img src={Figma} alt="" className='img-hover'/>
             </div>
            </div>
            <div className="rightside">
            <img src={Devimg} alt="" className='img-hover'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default banner
