import React from 'react'
import "./Experience.css"

const Experience = () => {

  return (
    <div className='experience-container d-flex'>
        <div className='exp-left-cards'>
                <div class="card mb-3"  >
                    <div className='card-hover'></div>
                    <div class="card-header"><i className='fa-solid fa-building pe-3'></i> Freelance</div>
                    <div class="card-body">
                        <h5 class="card-title"><i className='fa-solid fa-solid fa-code pe-3 pe-3'></i> Frontend Developer</h5>
                        <p class="card-text">Coding, design, design, page management, using react, Using npm package, writing html css bootstrap javascript code..</p>
                    </div>
                    <div className='exp-date'>07.2022 - Currently</div>
                </div>
            <div class="card mb-3"  >
                <div className='card-hover'></div>
                <div class="card-header"><i className='fa-solid fa-building pe-3'></i> Toros Primary School</div>
                <div class="card-body">
                    <h5 class="card-title"><i className='fa-solid fa-solid fa-person-chalkboard pe-3 pe-3'></i>Primary School Teaching</h5>
                    <p class="card-text">Classroom management, lecture, student follow-up, homework follow-up, teaching literacy, family visits..</p>
                </div>
                <div className='exp-date'>09.2011 - 07.2014</div>
            </div>
        </div>
        <div className='middle-line-and-arrow'>
            <div className='exp-line'>
                <span>2011</span>
                <span>2015</span>
                <span>2019</span>
                <span>2023</span>
            </div>
            <i class="exp-arrow first-arrow fa-solid fa-play"></i>
            <i class="exp-arrow second-arrow fa-solid fa-play"></i>
            <i class="exp-arrow third-arrow fa-solid fa-play"></i>
            <i class="exp-arrow fourth-arrow fa-solid fa-play"></i>
        </div>
        <div className='exp-right-cards'>
            <div class="card mb-3"  >
                    <div className='card-hover'></div>
                    <div class="card-header"><i className='fa-solid fa-building pe-3'></i>MEM Educational Institutions</div>
                    <div class="card-body">
                        <h5 class="card-title"><i className='fa-solid fa-solid fa-person-walking-arrow-right pe-3 pe-3'></i>Student Coaching</h5>
                        <p class="card-text">Student coaching, motivation, guidance, preparing a study program, homework follow-up, seminar, coordination, family visits..</p>
                    </div>
                    <div className='exp-date'>08.2018 - 09.2020</div>
            </div>
            <div class="card mb-3"  >
                <div className='card-hover'></div>
                <div class="card-header"><i className='fa-solid fa-building pe-3'></i>Rainbow Educational Institutions</div>
                <div class="card-body">
                    <h5 class="card-title">Primary School Teaching</h5>
                    <p class="card-text">Classroom management, lecture, student follow-up, homework follow-up, teaching literacy, family visits..</p>
                </div>
                <div className='exp-date'>09.2011 - 07.2014</div>
            </div>
        </div>
        
    </div>
  )
}

// const Card = () => {
//   return (
//     <div class="card mb-3"  >
//         <div class="card-header">Header</div>
//         <div class="card-body">
//             <h5 class="card-title">Primary card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>
//         <div className='exp-date'>12.12.2021 - 12.12.2021</div>
//     </div>
//   )
// }

export default Experience