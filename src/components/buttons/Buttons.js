import React from 'react'

const Button = ({ background, title, color, onClick, border }) => {
    return (
        <button style={{
            background: background, padding: '12px 30px', borderRadius: '13px',
            display: 'flex', justifyContent: 'center', alignItems: 'center', border: border, outline: 'none',
            fontFamily: `"GilroyRegular", sans-serif;`, fontSize: '14px', color: color,
        }} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button