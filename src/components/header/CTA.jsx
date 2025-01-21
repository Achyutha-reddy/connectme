import React from 'react'
import CV from '../../assets/ACHYUTH_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} downlode className='btn'>RESUME</a>
        {/* <a href="" className='btn btn-blog'>My Blog</a> */}
        <a href="#contact" className='btn btn-primary'>LET's CONNECT</a>
    </div>
  )
}

export default CTA