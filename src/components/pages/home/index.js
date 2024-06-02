import React from 'react'
import './index.css'
import profileImg from '../../assets/profile.png'
import hireIcon from '../../assets/hire.png'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <section id="home">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Kiel</span> <br/> Full Stack Developer</span>
        <p className="introPara">A passionate <b className='role'> Full Stack </b>Developer</p>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500}><button className="btn introBtn"><img src={hireIcon} alt="introImage" className='btnImg'/><span>Hire Me</span></button></Link>
      </div>
      <img src={profileImg} alt="profileImage" className="bg" />
    </section>
  )
}
