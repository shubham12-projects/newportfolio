import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='Footer' id='contact'>
            <div className="footerone" style={{ display: "flex", alignItems: "center", marginTop: "4rem" }}>
                <span style={{ flex: "10%" }}></span>
                <div className="imgf" style={{ flex: "40%" }}>

                    <div className="logoc"style={{ width: "7vw", height: "8vh", flex: "50%" ,fontSize:"2rem",fontWeight:"900"}}>Logo</div>
                </div>
                <div className="fitems" style={{ display: "flex", alignItems: "center", flex: "50%" }}>

                    <div className="phone" style={{ margin: "0 2rem" }}> +548527987329</div>
                    <div className="email"> shubk31@gmail.com</div>
                    <ul style={{ display: "flex", alignItems: "center", listStyleType: "none" }}>
                        <li class="nav-item nav-logo" style={{ marginLeft: "3vw" }}>
                            <a class="nav-link active" aria-current="page" href="/" ><GitHubIcon /></a>
                        </li>
                        <li class="nav-item nav-logo" style={{ marginLeft: "1vw" }}>
                            <a class="nav-link active" aria-current="page" href="/" ><TwitterIcon /></a>
                        </li>
                        <li class="nav-item nav-logo" style={{ marginLeft: "1vw" }}>
                            <a class="nav-link active" aria-current="page" href="/"><LinkedInIcon /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footersecond" id='fmid'>
                <span style={{flex : "3%"}}></span>

                <div className="newitems">
                    <ul class="tabs" style={{ listStyleType: "none" }}>

                        <li class="fitems" style={{ marginLeft: "2vw" }}>
                            <a class="" aria-current="page" href="/"  >Home</a>
                        </li>
                        <li class="fitems" style={{ marginLeft: "2vw" }}>
                            <a class="" aria-current="page" href="#about"  >About</a>
                        </li>
                        <li class="fitems" style={{ marginLeft: "2vw" }}>
                            <a class="" aria-current="page" href="#contact"  >Contact</a>
                        </li>
                        <li class="fitems" style={{ marginLeft: "2vw" }}>
                            <a class="" aria-current="page" href="#projects"  >Projects</a>
                        </li>
                        <li class="fitems" style={{ marginLeft: "2vw" }}>
                            <a class="" aria-current="page" href="#tech-stack"  >Technologies</a>
                        </li>
                    </ul>
                </div>
                <span style={{flex : "13%"}}></span>
                <div className="credit"> Designed and built by Shubham Sharma with <span style={{ color: "magenta" }}>Love </span>&<span style={{ color: "magenta" }}> Coffee</span></div>
                <span style={{flex : "4%"}}></span>

            </div>
        </div >
    )
}

export default Footer