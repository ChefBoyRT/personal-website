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
                        Say taco one more time. Tacos for breakfast, lunch and dinner. Black or pinto beans? 
                        Add in a few el Pastor with guac and diced onions. Tacos al pastor made with adobada meat. 
                        You see, the refried beans are really just the adhesive necessary to apply the soft tortilla 
                        to the hard taco shell. It’s long been rumored that the chupacabra is really just a crazed 
                        man who’s local taco shop went out of business. Carne asada on corn tortillas. Ooh, with diced 
                        onions and a pinch of cilantro.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
