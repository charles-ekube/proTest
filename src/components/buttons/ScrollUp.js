import React from 'react';
import ScrollImage from '../../assets/images/scroll.png'

const ScrollUp = () => {
    return (
        <>
            <button style={{
                width: '50px', height: '50px', border: 'none',
                backgroundColor: 'transparent', outline: 'none', display: 'flex',
                justifyContent: 'center', alignItems: 'center',
            }}>
                <img src={ScrollImage} alt='icon' style={{ width: '100%', height: '100%' }} />
            </button>
        </>
    )
}

export default ScrollUp