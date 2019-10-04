import React from 'react'
import './welcome.css'

export default function WelcomeNote() {
    return (
        <>
            <div className='welcome-note-container'>
                <div className='welcome-note-content'>
                    <div className='welcome-note-header'>
                        <h3 className='welcome-note-header-content'>Welcome Note</h3>
                    </div>
                    <div className='welcome-note-content-container'>
                        <p className='welcome-note-text'>
                            Welcome to my website and thank you so much for taking the time to review my work. 
                            Development fascinates me. I recently graduated with an MBA at University of Denver
                            before enrolling in a development bootcamp that taught me full stack software engineering
                            at a production ready level in 15 weeks. I'd like to let my projects speak for themselves,
                            in a similar way, I spent many years working my way up from a dishwasher to a regional manager
                            of a popular restaurant chain. Thank you again for taking the time to click through my site!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
