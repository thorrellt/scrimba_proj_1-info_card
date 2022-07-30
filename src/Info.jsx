import { useState } from 'react'
import profilePic from './assets/profile_pic.jpg'
import './Info.css'

function Info() {
    return(
        <div id="info">
           <img src={profilePic} id="profile_picture" alt="Profile Picture" /> 
        </div>

    )
}

export default Info