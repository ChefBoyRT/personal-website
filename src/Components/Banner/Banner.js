import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div>
            <img className='logo' src={require('./logo.jpeg')} alt='logo' />
            <div>
                <p className='quote'>BE YOURSELF. EVERYONE ELSE IS ALREADY TAKEN.</p>
                <h1 className='name'>Taylor <span className='banner-v'>V.</span> Stein</h1>
            </div>
        </div>
    );
}

export default Banner;
