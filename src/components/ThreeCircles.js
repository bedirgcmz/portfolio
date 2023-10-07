import React from 'react'
import "./ThreeCircles.css"

const ThreeCircles = ({linkId}) => {
  return (
    <div id={linkId} className='three-circles-container'>
        <div className='firs-circle m-5'></div>
        <div className='second-circle m-5'></div>
        <div className='third-circle m-5'></div>
    </div>
    
  )
}

export default ThreeCircles