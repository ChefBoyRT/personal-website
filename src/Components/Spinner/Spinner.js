import React from 'react'
import spinner from './PacMan.gif'
import './Spinner.css'

const Spinner = () => {
    return(
        <>
            <img className="spinner" src={spinner} alt="spinner" />
        </>
    )
}

export default Spinner