import React from 'react';
import { Link } from 'react-router-dom';

import OverviewIcon from '../../assets/images/svg/Overview';
import SettingsIcon from '../../assets/images/svg/Settings';
import './SideNav.css';
import Logo from '../../assets/images/svg/proaktifLogo.svg';
import DevicesIcon from '../../assets/images/svg/Devices';
import ClusterIcon from '../../assets/images/svg/Cluster';

const SideNav = () => {
    return (
        <>
            <nav className='sideNavContainer'>
                <div>
                    <img src={Logo} alt='logo' />
                </div>
                <ul>

                    <li>
                        <Link to={'/dashboard'} className='navLinks'>
                            <OverviewIcon />
                            <span>Overview</span>
                        </Link>

                    </li>
                    <li>
                        <Link to={'/setup'} className='navLinks'>
                            <ClusterIcon />
                            <span>Setup</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/settings'} className='navLinks'>
                            <SettingsIcon />
                            <span>Settings</span>
                        </Link>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideNav