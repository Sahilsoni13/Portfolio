import React from 'react'
import LOGOS from "../../json/skills.json"
const skill = () => {
  return (
    <div id='skill'>
     <section className="skillsection">
      <div className="container">
        <div className="skill-main">
          <div className="skill-heading heading">
            <h3>Skills</h3>
            <h2>The skills, tools and technologies I am really good at:</h2>
          </div>
          <div className="skills-logos">
          {
            LOGOS.map((item,index)=>{
              return(
          <div className="skills-names" key={index}>
            <img src={require(`../images/${item["skill-img"]}`)} alt="" className='img-hover'/>
            <h3>{item["skill-tittle"]}</h3>
          </div>
              )
            })
          }
          </div>
        </div>
      </div>
     </section>
    </div>
  )
}

export default skill
