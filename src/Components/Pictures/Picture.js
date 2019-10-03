import React from 'react'
import PictureContainer from './PicturesContainer'

export default function Picture() {
    return (
        <div>
            <div className='picture-icon-container'>
                <img className='picture-icon' src='https://image.flaticon.com/icons/svg/883/883787.svg' alt='camera icon' />
            </div>
            <PictureContainer />
        </div>
    )
}
