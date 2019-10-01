import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-container'>
                <div className='contact-card'>
                    <h1 className='contact-header'>Contact</h1>
                    <img className='contact-icon' src='https://image.flaticon.com/icons/svg/1157/1157044.svg' alt='contact icon' />
                    <div className='contact-card-info'>
                        <p><span className='contact'>Email: </span> <a className='about-email' href="mailto:taylor.v.stein@gmail.com">taylor.v.stein@gmail.com</a></p>
                        <p><span className='contact'>Phone: </span><a className='about-phone' href="tel:303.910.1898">303.910.1898</a></p>
                        <img onClick={()=> window.open("https://www.linkedin.com/in/taylor-stein/", "_blank")} className='linkedin-logo' src='https://image.flaticon.com/icons/svg/145/145807.svg' alt='linkedin logo' />
                        <img onClick={()=> window.open("https://github.com/ChefBoyRT", "_blank")} className='github-logo' src='https://image.flaticon.com/icons/svg/179/179323.svg' alt='github-logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
