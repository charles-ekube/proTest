import React from 'react'

const CustomTable = ({ children }) => {
    return (
        <section>
            <table>
                {children}
            </table>
        </section>
    )
}

export default CustomTable