import React from 'react'
import "./About.css"
import "./Download.css"
import aboutImg from "../images/about_img.png"

const About = () => {
  return (
    <div className='about-margin-top'>
      <h2 className='ms-3 text-white'>About Me</h2>
      <div className='about-container row'>
          <div className='touch-me-container col-md-1'>
            <span className='d-inline-block touch'>Touch</span>
            <span className='d-inline-block line-1'></span>
            <span className='d-inline-block circle-1'></span>
            <span className='d-inline-block github-icon mt-3 mb-3'><i class="fa-brands fa-github"></i></span>
            <span className='d-inline-block linkedin-icon mb-3'><i class="fa-brands fa-linkedin-in"></i></span>        
            <span className='d-inline-block circle-2'></span>
            <span className='d-inline-block line-2'></span>
            <span className='d-inline-block me'>me</span>
          </div>
          {/* <div className='about-me-text-container col-6 col-sm-12 col-'> */}
          <div className='about-me-text-container col-12 col-sm-12 col-md-5'>
              <h1 className='my-fullname text-center'>Welcome, I'm <span className='d-block'>Bedir Gocmez</span> </h1>
              <p className='about-me-text text-justify'>
                I am an ambitious Developer with a passion for software and technology. 
                I have been improving myself in the field of informatics for 2 years. 
                I continued learning on many platforms and learned different programming languages. 
                I also completed a course called "Full Stack Web Development". Now I have 
                started the "Frontend / App Developer" training at Högskola. A few years ago, 
                I developed web-based applications with my newly acquired skills and I am able 
                to improve myself in front-end and back-end disciplines. I am very keen to learn 
                new technologies and especially artificial intelligence. I think I am very flexible 
                and agile in team work. 
              </p>
          </div>
          {/* <div className='my-img-container col-5  col-sm-12 col-'> */}
          <div className='my-img-container col-12  col-sm-12 col-md-6'>
              <img className='about-img' src={aboutImg}></img>
          </div>
      </div>
      <a href='www.google.com' target='_blank' className='download-cv-bottom float-right'>
            <span ><i class="fa-solid fa-download pe-2"></i>Download CV</span>        
        </a>
    </div>
  )
}

export default About