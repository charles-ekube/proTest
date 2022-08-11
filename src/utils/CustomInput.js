import React from 'react';
import './Utils.css';

const CustomInput = ({ label, customStyle, icon, name, placeholder, type, onChange, onClickIcon, onFocus, disabled, value, customInput }) => {


    return (
        <div className='inputContainer' style={customStyle}>
            {label && <label className='labelText'>{label}</label>}
            <div className='inputBox'>
                <input type={type} placeholder={placeholder} name={name} onFocus={onFocus} value={value} style={customInput} className='input' onChange={onChange} disabled={disabled} autoComplete={false} />
                {icon && <span onClick={onClickIcon}>{icon}</span>}
            </div>
        </div>
    )
}

export default CustomInput