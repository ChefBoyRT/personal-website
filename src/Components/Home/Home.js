import React from 'react';
import './home.css'
import WelcomeNote from '../Welcome/WelcomeNote'

const Home = () => {
    return (
        <div>
            <div className='welcome-note-pic-container'>
                <WelcomeNote />
                <div className='home-verticle-line'></div>
                <img className='welcome-image' src='https://lh3.googleusercontent.com/DXR7mD3fA3O2OxU4ToMXnq63kukinBPdgleAl-pI8PnbkAbZ4pMmfupBb9ing1I2C9W6zCtdBAeXMBO9v0NOCC2-OcXCDUcL_0wTbWCp46PF9Vg14FuP7hd8mVtwPH8BFs4QPwzpw73nxHBRtaqhjC5c0aALpJtERU36pOMLAaWjGMJN6jjKhttjA8H_SLH4Pql3CQUmCcVWMbLSVTaNg7xzw3h2tzd2CGvPzyEYt6XJiMnnVPaJ6yTlhFOy5HfGn40cjEVxNad1HOvX1AHQvZP1fbpyig6k9QmO4FKnDSoEuq0yA5X8Pq9vsieOotMJTurvRpU5QJM3xKiBfDdcNLZ35fEf7Kbd5i6gMC6L5HdHLWLx6eI_XQhZzBctNExppDAZDtmmpzJl-EULWffTVqRq24Yl3mzOnQcun2J0tJQOVyClw_o4dwR5YZCPuIMNUNw8JqwURXrZp4D20Z6wles_ruRwcGBHodBwirWS-yDwdHbi2K6lW8P3XiMzQnxQ1-BiwxRMH5m30aABb0XrlzOLek6rpem1GrxX8QyY6FHeyPD8Kvr0iahcxxvkiK55rJPyscH1UPWpgpRz9QfgmMfbnthCVaQLtUQx-a6KGVx8G6aG9W4I0cb_MNWII6RDuzJhPjignHeHk0_hvEcPm9b-WGtVF0lR4iOQap6kAYiDlE7RJANBxZE=s929-no' alt='man' />
            </div>
        </div>
    );
}

export default Home;
