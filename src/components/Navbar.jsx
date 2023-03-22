import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import logomain from "../Images/7Jyp.gif";
import { useEffect } from 'react';
const Navbar = () => {
    const [darkcheck, setDarkCheck] = useState(false)
    useEffect(() => {
        if (darkcheck === true) {
            var element = document.body;
            element.setAttribute("data-bs-theme", "dark");
            element = document.getElementById("myDIV");
            element.classList.add("dark-mode");
            element = document.getElementById("fmid");
            element.classList.add("dark-mode");

        }
        else {
            console.log("yo")
            element = document.body;
            element.setAttribute("data-bs-theme", "light");
        }
    }, [darkcheck])
    const handleDark = (e) => {
        e.preventDefault();
        if (darkcheck === true) {
            setDarkCheck(false)
        }
        else {
            setDarkCheck(true)
        }
    }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = require('../Resume.pdf'); 
        link.download = 'Resume.pdf';
        link.click();
    };
    return (
        <div className='navmain shadow-lg rounded ' id="myDIV" style={{ padding: "0", marginBottom: "18vh", backgroundColor: "black" }} >
            <nav class="navbar navbar-expand-lg p-0" >
                <div class="container-fluid" style={{ display: "flex" }} >
                    <a class="navbar-brand" href="/" style={{ flex: "10%", alignItems: "center", marginLeft: "10vw" }} >
                        <img style={{ width: "7vw", height: "8vh" }} src={logomain} alt="logo" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", flex: "75%", marginRight: "10vw", color: "white" }}>
                            <li class="nav-item" style={{ marginLeft: "2vw" }}>
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }}  >Home</a>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "2vw" }}>
                                <a class="nav-link active" aria-current="page" href="#about" style={{ color: "white" }} >About</a>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "2vw" }}>
                                <a class="nav-link active" aria-current="page" href="#contact" style={{ color: "white" }} >Contact</a>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "2vw" }}>
                                <a class="nav-link active" aria-current="page" href="#projects" style={{ color: "white" }} >Projects</a>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "2vw" }}>
                                <a class="nav-link active" aria-current="page" href="#tech-stack" style={{ color: "white" }} >Tech Stack</a>
                            </li>

                            <li class="nav-item nav-logo" style={{ marginLeft: "3vw" }}>
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }} ><GitHubIcon /></a>
                            </li>
                            <li class="nav-item nav-logo" style={{ marginLeft: "1vw" }}>
                                <a class="nav-link active" aria-current="page" href="https://www.twitter.com/" style={{ color: "white" }} ><TwitterIcon /></a>
                            </li>
                            <li class="nav-item nav-logo" style={{ marginLeft: "1vw" }}>
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }}  ><LinkedInIcon /></a>
                            </li>
                            <li class="nav-item nav-logo" onClick={handleDark}>
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }}  ><LightModeIcon /></a>
                            </li>
                            <li class="nav-item nav-logo" style={{ marginLeft: "4vw" }} onClick={handleDownload}>
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }}  ><ArrowDownwardIcon /> Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar