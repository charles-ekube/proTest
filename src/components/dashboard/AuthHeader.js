import React from 'react';
import '../../assets/styles/AuthStyles.css';

const AuthHeader = (props) => {

    const { title, subTitle } = props

    return (
        <div className='headerContainer'>
            <h2 className='headerTitle'>{title}</h2>
            <p className='headerSubTitle'>{subTitle}</p>
            {/* <div>
                <img src='' alt='lock'/>
            </div> */}
        </div>
    )
}

export default AuthHeader