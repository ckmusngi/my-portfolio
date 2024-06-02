import React, { useRef, useState } from 'react';
import './index.css'
import facebookIcon from '../../assets/facebook.png'
import instaIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    console.log(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
      .sendForm('service_8pjx9gh', 'template_s4asnbs', form.current, {
        publicKey: 'vuld-WoZRzSD8aOF8',
      })
      .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          setFormData({
            from_name: '',
            from_email: '',
            message: '',
          });
          alert('Message sent successfully! I will get back to you as soon as possible.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    } else {
        console.log(`Something has gone wrong. Please check the form.`);
        alert('Something has gone wrong. Please check the form.')
    }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.from_name.trim()) {
        errors.from_name = 'name is required';
    }

    if (!data.from_email.trim()) {
        errors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.from_email)) {
        errors.from_email = 'Email is invalid';
    }

    if (!data.message.trim()) {
      errors.message = 'Please enter a message';
    }

    return errors;
  };  

  return (
    <section id="contact">
        {/* <div className="contactContainer"> */}
          <h1 className="contactTitle">Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" className="name" value={formData.from_name} onChange={handleChange}/>
            <input type="email" name="from_email" placeholder="Email" className="email" value={formData.from_email} onChange={handleChange} />
            <textarea name="message" placeholder="Message" className="msg" rows={5} value={formData.message} onChange={handleChange}></textarea>
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
