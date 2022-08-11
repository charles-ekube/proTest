import React from 'react';
import './Header.css';

const Header = ({ title, padding }) => {
    return (
        <div style={{ padding: padding, }}>
            <p className='headerTitleText'>{title}</p>
        </div>
    )
}

export default Header