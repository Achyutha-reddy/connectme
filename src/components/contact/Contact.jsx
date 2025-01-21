import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2em683p', 'template_5dvmq0e', form.current, {
        publicKey: 'ctW_GbS4ulYuqjcrE',
      })
      .then(
        () => {
          alert('MESAGE SENT SUCCESSFULLY!');
        },
        (error) => {
          alert('MESSAGE SENT UNSUCCESSFULLY, ONCE TRY AGIAN.', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>GET IN TOUCH</h5>
      <h2>CONTACT ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>EMAIL</h4>
          <h6>achyuthareddyborampeta@gmail.com</h6>
          <a href="mailto:achyuthareddyborampeta@gmail.com" target="_blank">SEND A MESSAGE</a>
          </artical>
          <artical className="contact__option">
          <AiOutlineTwitter className='contact__option-icon'/>
          <h4>TWITTER</h4>
          <h5>Achyutha_Reddie</h5>
          <a href="https://x.com/Achyutha_Reddie" target="_blank">SEND A MESSAGE</a>
          </artical>
          <artical className="contact__option">
          <AiFillLinkedin className='contact__option-icon'/>
          <h4>LINKEDIN</h4>
          <h5>ACHYUTH REDDY</h5>
          <a href="https://www.linkedin.com/in/achyuth-reddy-4bb9802a3/" target="_blank">SEND A MESSAGE</a>
          </artical>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Your Full Name' required />
          <input type="email" name="user_email" id="" placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>SEND MESSAGE</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
