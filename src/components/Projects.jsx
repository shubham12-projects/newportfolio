import React from 'react'
import Card from './Card'
import data from '../utilities/index.js'


const Projects = () => {
    
    return (
        <div className='Projects' style={{display:"flex",flexDirection:"column",alignItems:"center"}} id="projects">
            <div className="prhead" style={{ fontSize: "3vw", fontWeight: "500", marginBottom: "3vh"}}>Projects</div>
            <div className="ssubtechhead" style={{ fontSize: "2vw", fontWeight: "200", marginBottom: "10vh" }}>Things I've built so far</div>
            <div className="cards" style={{display:"flex",flexDirection:"row",justifyContent:"center",width:"90vw",flexWrap:"wrap"}}>
                {
                    data.projects.map((pr) => {
                        return(
                            <Card details={pr}/>
                        )
                    })
                }

            </div>
            
        </div>
    )
}

export default Projects