import React from 'react'
import Timeline from './Timeline'
import './timeline.css'

export default function TimelineContainer() {
    return (
        <div className='timeline-container'>
            <h1 className='timeline-title'>Where I've Been</h1>
            <Timeline />
        </div>
    )
}
