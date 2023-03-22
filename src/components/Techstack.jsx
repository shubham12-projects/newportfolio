import React from 'react'


import data from '../utilities/index.js'

const Techstack = () => {
  return (
    <div className='techstack' id='tech-stack'>
        <div className="techhead" style={{fontSize:"4vw",fontWeight:"700",marginBottom:"3vh"}}>My Tech Stack</div>
        <div className="ssubtechhead" style={{fontSize:"2vw",fontWeight:"200",marginBottom:"10vh"}}>Technologies i have been working with recently</div>
        <div className="techstacklogos" >
          {
            data.techstack.map((tech) => {
              return(
                <img src={tech.src} alt={tech.alt} className="techlogos" />

              )
            })
          }
        </div>
    </div>
  )
}

export default Techstack