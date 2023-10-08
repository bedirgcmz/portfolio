import React from 'react'
import emailjs from "emailjs-com"
import "./Contact.css"
import "./hovers.css"

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_w21zl4c", 
            "template_4y8tcvh", 
            e.target, 
            "m2Y_XycLwC6X2Pz8M"
            ).then(res=> {
                console.log(res);
            }).catch(err => console.log(err))
    }
  return (
    <div className='contact-container container'>
        <form onSubmit={sendEmail}>
        <h4 className='text-center contact-me-header'>Contact Me</h4>
            <div className="input-area mb-3">
                <i className="form-icon fa-solid fa-user"></i>
                <input name='name' type="text" className="form-control name" required placeholder=" Your fullname.."/>
            </div>
            <div className="input-area mb-3">
            <i className="form-icon fa-regular fa-envelope"></i>
                <input name='email' type="email" className="form-control email" required placeholder="  name@example.com"/>
            </div>
            <div className="mb-3 input-area">
                <textarea name='message' className="form-control message" rows="3" required placeholder="Write your messages"></textarea>
                <button id='send-button' name='submit' type="submit" className="form-control glow-on-hover submit my-2">Gönder</button>
            </div>            
        </form>
        <div className='touch-me'>
            <h4 className='text-center'>Touch Me</h4>
            <div className='touch-me-info'>
                <div className='info-icons mb-4'> <i className="fa-solid me-2 fa-envelope-circle-check"></i>bdrgcmz@gmail.com</div>
                <div className='info-icons mb-4'><i className="fa-solid me-2 fa-location-dot"></i>Alvsjo / Stockholm</div>
                <div className='info-icons mb-4'><i className="fa-solid me-2 fa-phone-volume"></i>076 963 73 90</div>
            </div>
            <div className='mb-2 touch-me-icons'>
                <div class="touch-me-icon-container">
                    <div class="touch-me-icon icon-fill">
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div class="touch-me-icon-container">
                    <div class="touch-me-icon icon-fill">
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact