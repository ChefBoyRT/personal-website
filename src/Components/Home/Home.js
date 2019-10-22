import React from 'react';
import './home.css'
import WelcomeNote from '../Welcome/WelcomeNote'

const Home = () => {
    return (
        <div>
            <div className='welcome-note-pic-container'>
                <WelcomeNote />
                <div className='home-verticle-line'></div>
                <img className='welcome-image' src='https://imgur.com/oozRbS1' alt='headshot' />
            </div>
        </div>
    );
}

export default Home;
