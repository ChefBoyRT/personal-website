import React from 'react'
import './welcome.css'

export default function WelcomeNote() {
    return (
        <>
            <div className='welcome-note-container'>
                <div className='welcome-note-content'>
                    <div className='welcome-note-header'>
                        <h3 className='welcome-note-header-content'>Welcome</h3>
                    </div>
                    <div className='welcome-note-content-container'>
                        <p className='welcome-note-text'>
                            Welcome to my website and thank you so much for taking the time to review my work. 
                            Software development fascinates me. Before emabarking on my software development journey,
                            I graduated with an MBA at University of Denver. Since then, I have had the privilege
                            of working with some of the most brilliant people and be insipired by the incredible
                            instructors at the Flatiron School. This website is a complete representation of myself
                            and everything I have to offer, for now, more to come. Do not hesitate to reach out to me through
                            my contact page if you would like to connect or have any further questions. Thanks again for
                            checking out my site!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
