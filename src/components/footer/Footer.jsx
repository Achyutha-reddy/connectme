import React from 'react'
import './footer.css'
//Downlode icons from react icons site
import {AiFillLinkedin} from 'react-icons/ai'
// import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'
import {FaDocker} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ACHYUTH</a>
      <ul className="permalinks">
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        {/* <li><a href="#portfolio">PORTFOLIO</a></li> */}
        <li><a href="#qualification">QUALIFICATION</a></li>
        <li><a href="#contact">CONATCT</a></li>
      </ul>
      <div className="footer__socials">
        {/* <a href="https://github.com/Achyutha-reddy"><AiFillGithub /></a> */}
        <a href="https://x.com/Achyutha_Reddie"><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/in/achyuth-reddy-4bb9802a3/"><AiFillLinkedin /></a>
        <a href="https://mail.google.com/mail/u/1/#inbox"><AiOutlineMail /></a>
        {/* <a href=""><SiHashnode /></a> */}
        <a href="https://hub.docker.com/u/achyuthareddy18"><FaDocker /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;Achyuth. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer