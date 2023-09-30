import React from 'react'
import Aboutimg from "../images/rear-view-programmer-working-all-night-long.jpg"
const about = () => {
  return (
    <div id="about" >
      <section className="about">
        <div className="container">
          <div className="about-main">
            <div className="about-head">
            <h1>About me</h1>
            </div>
            <div className="about-content">
            <div className="about-left">
            <img src={Aboutimg} alt="" className='img-hover' />
            </div>
            <div className="about-right">
              <h1>Curious about me? Here you have it:</h1>
              <p>I'm a passionate, self-proclaimed designer who specializes in frontend development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me. <br /> I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
              <h4>Finally, some quick bits about me.</h4>
              <ul>
              <li>Bachelor In Computer Application</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
              </ul>
            </div>
            </div>
          </div>
                  <p className='about-p'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
      </section>
    </div>
  )
}

export default about
