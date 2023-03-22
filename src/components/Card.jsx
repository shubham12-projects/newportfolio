import React from 'react'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Card = ({details}) => {
    return (
        <div class="card shadow-lg rounded" style={{width: "18rem",margin:"3vh 3vw"}}>
            <img src={details.src} class="card-img-top" alt="..." style={{width: "17.9rem",height:"14rem"}}/>
                <div class="card-body">
                    <h5 class="card-title">{details.heading}</h5>
                    <p class="card-text">{details.subheading}</p>
                    <p class="card-text" style={{fontSize:"1rem"}}><div className="card-tech" style={{fontWeight:"500"}}>Tech Stack : </div><div className="techstacks">{details.stacks}</div></p>

                    <div className="links" style={{display:"flex"}}>
                        <a href="#link" class="projectlink nav-link mx-2"><LinkIcon />Use Preview</a>
                        <a href="#link" class="projectlink nav-link"><GitHubIcon />View Code</a>
                    </div>
                </div>
        </div>
    )
}

export default Card