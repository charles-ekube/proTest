import React, { useState } from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import Logo from '../../assets/images/logo.svg';
import '../../assets/styles/Nav.css';
import { BiMenu } from 'react-icons/bi';
import Button from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const [state, setState] = useState({
        showMenu: false
    })
    const toggleMenu = () => {
        if (state.showMenu) {
            setState((prevState) => ({ ...prevState, showMenu: false }))
        } else {
            setState((prevState) => ({ ...prevState, showMenu: true }))
        }

    }
    const closeNav = () => {
        setState((prevState) => ({ ...prevState, showMenu: false }))
    }
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
        // window.location.href = 'https://proaktifenergymanagement.appgyverapp.com/';
    }

    return (
        <>
            <nav className='webNav'>
                <div>
                    <img src={Logo} alt='logo' className='logo-image' />
                </div>
                <div className='centerContainer'>
                    <div>
                        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                        ))}
                    </div>
                </div>
                <div className='rightContainer'>
                    <Button title={'Login'} background={'rgba(52, 115, 239, 1)'} color={'#fff'} border={'none'} onClick={goToLogin} />
                </div>
                <div className='mobileContainer' onClick={toggleMenu}>
                    <BiMenu size={32} />
                </div>
            </nav>
            {state.showMenu &&
                <section className='mobileMenu animate__animated animate__slideInDown'>
                    <div className='mobileListNav'>
                        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} closeNav={closeNav} />
                        ))}
                    </div>
                    <div style={{ padding: '20px 0' }}>
                        <Button title={'Login'} background={'rgba(52, 115, 239, 1)'} color={'#fff'} border={'none'} />
                    </div>
                </section>}
        </>
    );
};

export default Nav;