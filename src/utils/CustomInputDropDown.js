import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';
import './Utils.css';

const CustomInputDrop = (props) => {

    const { label, customStyle, customDropStyle, icon, color, name, placeholder, type, onChange, onClickIcon, customInput, disabled, value, children, dropDown, customInputStyle } = props


    return (
        <section style={{ position: 'relative' }}>
            <div className='inputContainer' style={customStyle} onClick={onClickIcon}>
                {label && <label className='labelText'>{label}</label>}
                <div className='inputBox' style={customInputStyle}>
                    <input type={type} placeholder={placeholder} name={name} style={customInput} value={value} className='input' onChange={onChange} disabled={disabled} />
                    <KeyboardArrowDown sx={{ color: color }} />
                </div>
            </div>
            {dropDown &&
                <div className='dropDownModal' style={customDropStyle}>
                    {children}
                </div>
            }
        </section>

    )
}

export default CustomInputDrop