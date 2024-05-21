import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile2 from '../../assets/profile2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile2} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm currently a third-year student pursuing a Bachelor of Science degree in Computer Science. Alongside my studies, I've gained experience and have been fortunate to collaborate with my clients, where I've served as a freelancer, contributing to their growth and success.</p>
                    <p>I'm deeply passionate about frontend development, which is evident not just in my extensive learning but also in the enthusiasm and dedication I pour into each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Kotlin</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About