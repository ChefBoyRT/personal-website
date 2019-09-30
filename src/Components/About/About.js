import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-header'>About</div>
            <div className='about-card'>
                <img className='about-icon' src='https://image.flaticon.com/icons/svg/912/912316.svg' alt='icon of man' />
                <div className='about-card-info'>
                    <div className='about-text'>
                        Every day is taco ipsum tuesday. Fish tacos with cabbage slaw and a side of chips and guac. 
                        Let’s do a beef and a chicken, and one with both. Black or pinto beans? Tacos Al pastor/De 
                        Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped 
                        on one another on a vertical rotisserie cooked and flame-broiled as it spins. I’d have to say, 
                        those tacos are on fleek. It’s raining tacos, from out of the sky, tacos, don’t even ask why.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
