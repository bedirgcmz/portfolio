import React from 'react'
import "./Skills.css"
import skills1 from "../images/skills1.png"
import html from "../images/icons/html.png"
import agile from "../images/icons/agile.png"
import bootstrap from "../images/icons/bootstrap.png"
import css from "../images/icons/css.png"
import git from "../images/icons/git.png"
import github from "../images/icons/github.png"
import jira from "../images/icons/jira.png"
import js from "../images/icons/js.png"
import mysql from "../images/icons/mysql.png"
import nodejs from "../images/icons/nodejs.jpg"
import react from "../images/icons/react.png"

const Skills = () => {
  return (
    <div className='skills-container'>
            {/* <img src={css} className='skill-img'></img>
            <img src={js} className='skill-img'></img>
            <img src={react} className='skill-img'></img>
            <img src={bootstrap} className='skill-img'></img>
            <img src={agile} className='skill-img'></img>
            <img src={jira} className='skill-img'></img>
            <img src={mysql} className='skill-img'></img>
            <img src={nodejs} className='skill-img'></img>
            <img src={git} className='skill-img'></img>
            <img src={github} className='skill-img'></img> */}
        <div className="skill html">
        <img src={html} className='skill-img'></img>
            <div className='skill-right-content'>
                <div className='skill-name-container'>
                    <span className='skill-point me-2'></span>
                    <spna className='skill-name text-white'>Html</spna>
                </div>
                <div className='progress-container'>
                    <span className='progress p-orange'></span>
                    <span className='progress p-blue'></span>
                </div>
            </div>
        </div>
        <div className="skill css">
        <img src={css} className='skill-img'></img>
            <div className='skill-right-content'>
                <div className='skill-name-container'>
                    <span className='skill-point me-2'></span>
                    <spna className='skill-name text-white'>Css</spna>
                </div>
                <div className='progress-container'>
                    <span className='progress p-orange'></span>
                    <span className='progress p-blue'></span>
                </div>
            </div>
        </div>
        <div className="skill js">
        <img src={js} className='skill-img'></img>
            <div className='skill-right-content'>
                <div className='skill-name-container'>
                    <span className='skill-point me-2'></span>
                    <spna className='skill-name text-white'>JavaScript</spna>
                </div>
                <div className='progress-container'>
                    <span className='progress p-orange'></span>
                    <span className='progress p-blue'></span>
                </div>
            </div>
        </div>
        <div className="skill bootstrap">
        <img src={bootstrap} className='skill-img'></img>
            <div className='skill-right-content'>
                <div className='skill-name-container'>
                    <span className='skill-point me-2'></span>
                    <spna className='skill-name text-white'>Bootstrap</spna>
                </div>
                <div className='progress-container'>
                    <span className='progress p-orange'></span>
                    <span className='progress p-blue'></span>
                </div>
            </div>
        </div>
        <div className="skill react">
        <img src={react} className='skill-img'></img>
            <div className='skill-right-content'>
                <div className='skill-name-container'>
                    <span className='skill-point me-2'></span>
                    <spna className='skill-name text-white'>React</spna>
                </div>
                <div className='progress-container'>
                    <span className='progress p-orange'></span>
                    <span className='progress p-blue'></span>
                </div>
            </div>
        </div>
        <img className="skills-wheel" src={skills1}></img>
    </div>
  )
}

export default Skills