import React, { useRef } from 'react';
import './index.css'
import facebookIcon from '../../assets/facebook.png'
import instaIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8pjx9gh', 'template_s4asnbs', form.current, {
        publicKey: 'vuld-WoZRzSD8aOF8',
      })
      .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Message sent successfully! I will get back to you as soon as possible.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
        {/* <div className="contactContainer"> */}
          <h1 className="contactTitle">Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" className="name"/>
            <input type="email" name="from_email" placeholder="Email" className="email" />
            <textarea name="message" placeholder="Message" className="msg" rows={5}></textarea>
            <button type="submit" value='send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={facebookIcon} alt="" className="link" onClick={() => window.open('https://www.facebook.com/ck.musngi/', '_blank', 'noopener,noreferrer')}/>
              <img src={instaIcon} alt="" className="link" onClick={() => window.open('https://www.instagram.com/ckmusngi/', '_blank', 'noopener,noreferrer')}/>
              <img src={linkedinIcon} alt="" className="link" onClick={() => window.open('https://www.linkedin.com/in/cyrill-kiel-musngi-378427189/', '_blank', 'noopener,noreferrer')}/>
            </div>
          </form>
        {/* </div> */}
    </section>
  )
}
