import React from 'react'
import spinner from './loading.gif'
import './Spinner.css'

const Spinner = () => {
    return(
        <>
            <img className="spinner" src={spinner} alt="spinner" />
        </>
    )
}

export default Spinner