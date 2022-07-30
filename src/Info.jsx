import { useState } from 'react'
import profilePic from './assets/profile_pic.jpg'
import linkedinBtn from './assets/btn-linkedin.png'
import emailBtn from './assets/btn-email.png'
import './Info.css'

function Info() {
    return (
        <div id="info">
            <img src={profilePic} id="profile_picture" alt="Profile Picture" />
            <h1> Thorrell Turner</h1>
            <h3>Frontend Developer</h3>
            <p><a href="https://www.thorrellt.com/" target="_blank">thorrellt.com</a></p>

            <div id='info-btn-container'>
                <a href="mailto:thorrellt@gmail.com" target="_blank" >
                    <img src={emailBtn} alt="email" className='info--btn'></img>
                </a>
                <a href="https://www.linkedin.com/in/thorrellt/" target="_blank">
                    <img src={linkedinBtn} alt="linkedIn" className='info--btn'></img>
                </a>
            </div>
        </div>

    )
}

export default Info