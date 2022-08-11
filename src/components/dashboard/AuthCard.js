import React from 'react';
import '../../assets/styles/AuthStyles.css';


const AuthCard = (props) => {
    return (
        <div className='cardContainerAuth'>
            {props.children}
        </div>
    )
}

export default AuthCard