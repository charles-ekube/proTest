import React from 'react';
import '../../assets/styles/SetupStyles.css';

const CustomModal = ({ children }) => {
    return (
        <section className={'customModal'}>
            {children}
        </section>
    )
}

export default CustomModal