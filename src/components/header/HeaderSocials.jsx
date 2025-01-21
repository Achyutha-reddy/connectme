import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
// import {FaGithub} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
// import {SiHashnode} from 'react-icons/si'
import {FaDocker} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/achyuth-reddy-4bb9802a3/" target='_blanl'><BsLinkedin /></a>
        {/* <a href="https://github.com/Achyutha-reddy" target='_blanl'><FaGithub /></a> */}
        <a href="https://x.com/Achyutha_Reddie"><AiOutlineTwitter /></a>
        {/* <a href=""><SiHashnode /></a> */}
        <a href="https://hub.docker.com/u/achyuthareddy18"><FaDocker /></a>
    </div>
  )
}

export default HeaderSocials 