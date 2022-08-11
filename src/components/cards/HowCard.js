import React from 'react';
import './Cards.css';
import BgImage from '../../assets/images/howBg.svg';

const HowCard = ({ content, title }) => {
    return (
        <div className='cardContainer animate__animated animate__fadeIn'>
            <div className='cardImage'>
                <img src={BgImage} alt='poster' />
            </div>
            <div className='cardContainerOverlay'>
                <p className='cardTitle'>{title}</p>
                <p className='cardText'>{content}</p>
            </div>
        </div>
    )
}

export default HowCard