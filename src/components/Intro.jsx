import React from 'react'
import pic from "../Images/dp.jpeg";
const Intro = () => {
    
  return (
    <div className='intro ' id='about' style={{fontSize:"4vw",fontWeight:"700",height:"32vw"}}>
        <div className="heading">
            <div className="intro-heading">
                <div className="firstline">
                    <div className="hihead">Hi . </div>
                    <div className="hiemoji">. 👋,</div>
                </div>
                 <div className="myname"> My name is</div>
                </div>
            <div className="intro-name">Shubham Sharma</div>
            <div className="intro-subhead">I build things for Web</div>

        </div>
        <div className="dp">
            <img src={pic} alt="dp" className="dev-dp "/>
        </div>
    </div>
  )
}

export default Intro