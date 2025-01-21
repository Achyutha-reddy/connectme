import React from 'react'
import './portfolio.css'

import HOPEVJIT from '../../assets/HOPE-VJIT.png'
import MANISHA from '../../assets/MANISHA-AND-CO-ADVOCATES.png'
import IPLT20 from '../../assets/IPLT20.png'
import IPLAUCTION from '../../assets/IPL-AUCTION.png'
import TELECOME from '../../assets/TELECOME.png'
import PORTFOLIO from '../../assets/PORTFOLIO.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PORTFOLIO</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HOPEVJIT} alt="" />
          </div>
          <h3>HOPE VJIT WEBSITE </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Achyutha-reddy/HOPE_VJIT" className='btn' target='_blank'>Github</a>
            <a href="https://achyutha-reddy.github.io/HOPE_VJIT/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={MANISHA} alt="" />
        </div>
        <h3>MANISHA & CO ADVOCTAES WEBSITE</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Achyutha-reddy/Manisha_and_Co_Advocates" className='btn' target='_blank'>Github</a>
        <a href="https://achyutha-reddy.github.io/Manisha_and_Co_Advocates/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IPLT20} alt="" />
        </div>
        <h3>IPLT20</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Achyutha-reddy/iplt20" className='btn' target='_blank'>Github</a>
        <a href="https://achyutha-reddy.github.io/iplt20/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={TELECOME} alt="" />
        </div>
        <h3>TELECOM INVENTORY MANAGEMENT SYSTEM</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Achyutha-reddy/telecom-inventory-management-system" className='btn' target='_blank'>Github</a>
        <a href="https://achyutha-reddy.github.io/telecom-inventory-management-system/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IPLAUCTION} alt="" />
          </div>
          <h3>IPL AUCTION</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Achyutha-reddy/IPL-AUCTION" className='btn' target='_blank'>Github</a>
            <a href="https://achyutha-reddy.github.io/IPL-AUCTION/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PORTFOLIO} alt="" />
          </div>
          <h3>PERSONAL PORTFOLIO</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Achyutha-reddy/PORTFOLIO" className='btn' target='_blank'>Github</a>
            <a href="https://achyutha-reddy.github.io/PORTFOLIO/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio