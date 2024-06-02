import React from 'react'
import './index.css'
import experienceImg from '../../assets/experience.png'
import schoolImg from '../../assets/school.png'
import aboutImage from '../../assets/profile.png'

export default function About() {
  return (
    <section id='about'>
        <p className='aboveTitle'>Get to Know More</p>
        <h1 className="title">About Me</h1>
            <div className="about-containers">
                <img src={aboutImage} alt="aboutImage" className='about-image' />
                <div className="about-details-container">
                    <div className="exp-details-container">
                        <div className="details-container">
                            <img src={experienceImg} alt='experience' class='icon'></img>
                            <div className="text-details-container">
                                <h3>Experience</h3>
                                <p>4+ Years <br/> Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="details-container">
                            <img src={schoolImg} alt='experience' class='icon'></img>
                            <div className="text-details-container">
                                <h3>Education</h3>
                                <p>Bachelor of Science in Information Technology</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-container">
                        <p className='about-para'>Hello there! I'm Kiel, a <b style={{color:'grey'}}>Full Stack</b> developer based in Philippines. </p>
                        <p className='about-para'>People who know me say I'm obsessed, that's fair, I am very driven and love learning new things.</p>
                    </div>
                    <hr className='about-hr'/>
                    <div className='techs-container'>
                        <bold className='tech-title'>Technologies I've worked with:</bold>
                        <div className='techs'>
                            <div className="skill-container"> <p className='tech-skill'>Laravel</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>React</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>Node.js</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>ASP.NET</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>PHP</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>MYSQL/MSSQL</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>Git</p> </div>
                            <div className="skill-container"> <p className='tech-skill'>AWS</p> </div>
                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
    </section>
  )
}
