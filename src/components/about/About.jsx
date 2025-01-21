import React from 'react'
import './about.css'
import ME from '../../assets/achyuth_side_pic2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>GET TO KNOW</h5>
      <h2>ABOUT ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>EXPERIENCE</h5>
              <small>FRESHER</small>
            </article>
            {/* <article className='about__card'>
              <FiUser  className='about__icon'/>
              <h5>Clients</h5>
              <small>30+</small>
            </article> */}
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>PROJECTS</h5>
              <small>6 PROJECTS</small>
            </article>
          </div>
          <p>Coming from a background in design, I love creating pages where I’m able to actually create enjoyable interactions and experiences for everyone!I possess potential across a wide range of technical skills, including programming languages such as Python, C as well as expertise in utilizing tools and frameworks such as Git, Docker for efficient project development and collaboration. Familiarity with database management systems, including SQL. Possess a strong understanding of networking protocols, web development technologies (HTML/CSS, JavaScript, React).
            </p>
            <a href="#contact" className='btn btn-primary'>LET's CONNECT</a>
        </div>
      </div>

    </section>
  )
}

export default About