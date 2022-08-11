import React from 'react';
import '../../assets/styles/GeneralStyles.css';

const DashContainer = (props) => {
    return (
        <div className='dashContainer'>{props.children}</div>
    )
}

export default DashContainer