import React from 'react'
import Checked from '../assets/images/svg/Checked'

const CustomCheckBox = (props) => {

    const { checked, text, onClick } = props
    return (
        <div className='checkBoxContainer' onClick={onClick}>
            <div className='checkBox' style={{ backgroundColor: checked ? 'rgba(52, 115, 239, 1)' : 'inherit' }}>
                {checked && <Checked />}
            </div>
            <p className='checkBoxText'>{text}</p>
        </div>
    )
}

export default CustomCheckBox