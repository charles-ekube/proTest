import React from 'react';
import '../../assets/styles/HomeStyles.css';

const SlideIndicator = ({ backgroundCenter, backgroundLeft, backgroundRight }) => {
    return (
        <>
            <section className='indicatorContainer'>
                <div style={{ backgroundColor: backgroundLeft }}></div>
                <div style={{ backgroundColor: backgroundCenter }}></div>
                <div style={{ backgroundColor: backgroundRight }}></div>
            </section>
        </>
    )
}

export default SlideIndicator