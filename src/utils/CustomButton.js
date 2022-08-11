import React from 'react';
import './Utils.css';

const CustomButton = (props) => {

    const { title, icon, onClick, customStyle, color, disabled, type } = props

    return (
        <>
            <button className='buttonContainer' style={customStyle} onClick={onClick} disabled={disabled} type={type}>
                <p className='buttonText' style={{ color: color }}>{title}</p>
                {icon && <span>{icon}</span>}
            </button>
        </>
    )
}

export default CustomButton