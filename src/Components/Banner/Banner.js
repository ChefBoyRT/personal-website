import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div>
            <img src={require('./logo.jpeg')} alt='logo' />
            <div>
                <p>BE YOURSELF. EVERYONE ELSE IS ALREADY TAKEN.</p>
                <h1>Taylor V. Stein</h1>
            </div>
        </div>
    );
}

export default Banner;
