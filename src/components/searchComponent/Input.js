import React from 'react'

const Input = ({ onChange, value }) => {
    return (
        <>
            <input onChange={(e) => onChange(e.target.value)} value={value} />
        </>
    )
}

export default Input