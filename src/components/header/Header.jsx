import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/main_pf.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    
    <header>
      <div className="container header__container">
        <h5>HELLO I'm</h5>
        <h1>ACHYUTHA REDDY</h1>
        <h5 class ='text-light' >FULL STACK DEVELOPER</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>SCROLL DOWN</a>
      </div>
    </header>
  )
}

export default Header