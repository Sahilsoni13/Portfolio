import React from 'react'
import Copy from "../images/copy.png"
import Call from "../images/phone-call.png"
import Msg from "../images/mail.png"
import Figma from "../images/figma.png"
import Github from "../images/github.png"
import Twitter from "../images/pngwing.com.png"
const footer = () => {
  return (
    <div id='contact'>
      <section className="contact-me">
        <div className="container">
          <div className="contact-main heading">
            <h3>Get In Touch</h3>
            <h2>What’s next? Feel free to reach out to me if you are looking <br />for a developer, have a query, or simply want to connect.</h2>
            <div className="contactme">
              <h2><img src={Msg} className='img-hover'  alt="" />sonisahil1018@gmail.com<img src={Copy} alt=""  /></h2>
              <h2><img src={Call} className='img-hover' alt="" />+91 7814833441<img src={Copy} alt=""  /></h2>
            </div>
            <div className="platforms">
            <h3>You may also find me on these platforms!</h3>
            <p><img src={Figma} alt="" className='img-hover'/><img src={Github} alt=""  className='img-hover'/><img src={Twitter} alt="" className='img-hover' /></p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p> &copy; 2023 | Designed and codedwith ❤️️ by Sahil Soni</p>
      </footer>
    </div>
  )
}

export default footer
