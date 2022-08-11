import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import '../../assets/styles/Nav.css';

const NavLink = ({ navLinkId, scrollToId, closeNav }) => {
    const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

    const handleClick = () => {
        setActiveNavLinkId(navLinkId);
        document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
        closeNav()
    };

    return (
        <span
            id={navLinkId}
            className={activeNavLinkId === navLinkId ? 'activeClass' : 'normalClass'}
            onClick={handleClick}
        >
            {navLinkId}
        </span>
    );
};

export default NavLink;