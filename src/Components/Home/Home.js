import React from 'react';
import './home.css'
import TimelineContainer from '../Timeline/TimelineContainer'

const Home = () => {
    return (
        <div>
            <h1 className='home-welcome'>Welcome!</h1>
            <TimelineContainer />
        </div>
    );
}

export default Home;
