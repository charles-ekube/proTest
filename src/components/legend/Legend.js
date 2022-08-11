import React from 'react';
import './Legend.css';

const Legend = ({ title }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='leftBar'></span>
            <p className='title'>{title}</p>
            <span className='rightBar'></span>
        </div>
    )
}

export default Legend