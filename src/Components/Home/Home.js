import React from 'react';
import './home.css'
import WelcomeNote from '../Welcome/WelcomeNote'

const Home = () => {
    return (
        <div>
            <div className='welcome-note-pic-container'>
                <WelcomeNote />
                <div className='home-verticle-line'></div>
                <img className='welcome-image' src='https://i.imgur.com/oozRbS1.jpg' alt='headshot' />
            </div>
        </div>
    );
}

export default Home;
