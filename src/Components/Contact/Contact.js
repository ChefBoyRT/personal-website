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
                        <p><span className='contact'>Phone Number:</span> 303.910.1898</p>
                        <p><span className='contact'>Email Address:</span> taylor.v.stein@gmail.com</p>
                        <p><span className='contact'>LinkedIn:</span> taylor.v.stein@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
