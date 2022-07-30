import { useState } from 'react'
import twitterIcon from './assets/icon-twitter.png'
import facebookIcon from './assets/icon-facebook.png'
import instagramIcon from './assets/icon-instagram.png'
import githubIcon from './assets/icon-github.png'

function Footer(){
    return(
        <footer>
            <img src={twitterIcon} className='contact-icon' alt="twitter Icon" />
            <img src={facebookIcon} className='contact-icon' alt="facebook Icon" />
            <img src={instagramIcon} className='contact-icon' alt="instagram Icon" />
            <img src={githubIcon} className='contact-icon' alt="github Icon" />
        
        </footer>
    )
}

export default Footer