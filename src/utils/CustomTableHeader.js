import React from 'react'

const CustomTableHeader = ({ children }) => {
    return (
        <>
            <tr>
                {children}
            </tr>
        </>
    )
}

export default CustomTableHeader