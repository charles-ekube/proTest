import React from 'react';
import './SideNav.css';
import Avatar from '../../assets/images/user.png';
import { useSelector } from 'react-redux';

const TopNav = () => {

    const { userData } = useSelector(state => state.auth)
    // console.log(userData);
    return (
        <>
            <section className='topNavContainer'>
                <div>
                    <p className='userName'>{userData?.details?.company_name}</p>
                    <p className='userTitle'>Admin</p>
                </div>
                <div className='userAvatar'>
                    <img src={Avatar} alt='avatar' />
                </div>
            </section>
        </>
    )
}

export default TopNav