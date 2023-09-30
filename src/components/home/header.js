import React, { useState, useRef, useEffect } from 'react'

import Menu from "../images/menu-4-32.png"

const Header = () => {

  const nvm = useRef("")
  // const [active, setActive] = useState(false)
 

  useEffect(()=>{
    const navme = document.querySelector(".navbar");
    const burger = document.querySelector(".menu-icon");
    burger?.addEventListener("click",()=>{
         (nvm.current).classList.toggle("test")
        // navme.classList.toggle("test")
      })
  },[nvm])

  // let showme = ()=>{
  // }

  return (
    <>
     <section className="navigation">
      <div className="container">
        <div className="nav-main">
          <div className="navleft">
            <h1>SAHIL</h1>
            <div className="menu-icon" >
            <img src={Menu} alt="" />
          </div>
          </div>
         
          <nav className="navbar" ref={nvm}>
          <div className="navright">
            <ul className='nav-show'>
              <li><a href="#banner">HOME</a></li>
              <li><a href="#skill">SKILL</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#">WORK</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </nav> 
       
         
        
        </div>
      </div>
      
     </section>
     

     
    </>
  )
}

export default Header
